import Stylesheet from './modal.component.styles'

const Modal: Resolut.Modal.Component = memo(
    forwardRef(({ open, styles, children, onSubmit }, forwardedRef) => {
        if (typeof forwardedRef === 'function') throw new Error('FEJLMELDING')

        const modal = forwardedRef || createRef<HTMLDialogElement>()!

        useEffect(() => {
            modal.current?.removeAttribute('open')

            open ? modal.current?.showModal() : modal.current?.close()
        }, [open])

        const stylesheet = Stylesheet.create({
            maxWidth: styles?.maxWidth || '700px',
            height: styles?.height || '350px'
        })

        return (
            <dialog ref={modal} className="modal" style={stylesheet}>
                <form style={{ height: '100%', width: '100%', display: 'grid' }} onSubmit={onSubmit} method="dialog">
                    {children}
                </form>
            </dialog>
        )
    })
)

export default Modal
