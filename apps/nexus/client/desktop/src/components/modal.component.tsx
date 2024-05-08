interface ModalProps extends React.ComponentProps<'dialog'> {
    name: string
    children: JSX.Element
    icon?: string
    title?: string
}

const Modal = ({ name, children, icon, title, onSubmit, className, ...props }: ModalProps) => {
    const dismissListener = (event: Event) => {
        if ((event.target as HTMLElement).nodeName === 'DIALOG') {
            const dialog = document.getElementById(name) as HTMLDialogElement
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
            className={`p-8 rounded-lg overflow-visible m-auto${' ' + className}`}
            id={name}
            onSubmit={onSubmit}
            {...props}
        >
            <form method="dialog">
                <header className="flex gap-4 w-full">
                    <div className="p-2 border-gray-200 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                            <path d={icon}></path>
                        </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="font-bold text-base">{title}</h2>
                        <p>Udfyld nedenstående</p>
                    </div>
                    <button type="button" id="close" className="self-start ml-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28">
                            <path d="M256-227.692 227.692-256l224-224-224-224L256-732.308l224 224 224-224L732.308-704l-224 224 224 224L704-227.692l-224-224-224 224Z"></path>
                        </svg>
                    </button>
                </header>
                {children}
            </form>
        </dialog>
    )
}

export default Modal
