interface ModalProps extends CSSAttributes {
    name: string
    children: JSX.Element
    icon?: string
    title?: string
    onSubmit?: (
        event: Event & {
            submitter: HTMLElement
        } & {
            currentTarget: HTMLDialogElement
            target: Element
        }
    ) => void
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
            padding="2rem"
            border-radius="0.5rem"
            id={props.name}
            onSubmit={props.onSubmit}
            margin="auto"
            overflow:visible
            {...props}
        >
            <form method="dialog">
                <header flex gap="1rem" width="100%">
                    <div padding="0.5rem" border-grey-200 border-radius="0.5rem">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                            <path d={props.icon}></path>
                        </svg>
                    </div>
                    <div flex flex-direction:column gap="0.25rem">
                        <h2 font-weight:bold font-size="1rem">
                            {props.title}
                        </h2>
                        <p>Udfyld nedenstående</p>
                    </div>
                    <button type="button" id="close" align-self:start margin-left="auto">
                        <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28">
                            <path d="M256-227.692 227.692-256l224-224-224-224L256-732.308l224 224 224-224L732.308-704l-224 224 224 224L704-227.692l-224-224-224 224Z"></path>
                        </svg>
                    </button>
                </header>
                {props.children}
            </form>
        </dialog>
    )
}

export default Modal
