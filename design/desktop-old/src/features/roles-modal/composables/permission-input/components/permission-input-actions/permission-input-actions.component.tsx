import styles from './permission-input-actions.component.module.css'

const PermissionInputActions = ({ setOpen }: { setOpen: Solid.Setter<boolean> }) => {
    return (
        <div flex class={styles.actions}>
            <button flex flex:center size="3rem" type="button" onClick={(event) => {}}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M256-227.692 227.692-256l224-224-224-224L256-732.308l224 224 224-224L732.308-704l-224 224 224 224L704-227.692l-224-224-224 224Z" />
                </svg>
            </button>
            <button
                flex
                flex:center
                size="3rem"
                type="button"
                onClick={(event) => {
                    event.preventDefault()
                    setOpen((value) => !value)
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32">
                    <path d="M480-371.923 267.692-584.231 296-612.539l184 184 184-184 28.308 28.308L480-371.923Z" />
                </svg>
            </button>
        </div>
    )
}

export default PermissionInputActions
