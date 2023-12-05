interface ModalProps extends CSSAttributes {
    name: string
    height?: string
    width?: string
    padding?: string
    children: JSX.Element
}

const Modal = (props: ModalProps) => {
    const dismissListener = (event: Event) => {
        if ((event.target as HTMLElement).nodeName === 'DIALOG') {
            const dialog = document.getElementById(props.name) as HTMLDialogElement
            if (dialog) {
                dialog.close()
            }
        }
    }

    createEffect(() => {
        document.addEventListener('click', dismissListener)

        onCleanup(() => {
            document.removeEventListener('click', dismissListener)
        })
    })

    return (
        <dialog
            select-none
            id={props.name}
            style={{
                height: props.height || '600px',
                width: props.width || '600px',
                padding: props.padding || '2rem',
                margin: 'auto'
            }}
            {...props}
        >
            {props.children}
        </dialog>
    )
}

export default Modal
