import permissions from '../../permissions-input.component.data'
import styles from './permission-input-selection.component.module.css'

const PermissionInputSelection = () => {
    const store = useStore($CreateRole.store)

    return (
        <div class={styles.selection}>
            <For each={store().permissions} fallback={null}>
                {(permission) => (
                    <div>
                        <span>{permissions.filter((p) => p.value === permission.name)[0].label || ''}</span>
                        <button flex flex:center size="3rem" type="button" onClick={(event) => {}}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="16"
                                viewBox="0 -960 960 960"
                                width="16"
                                onClick={(event) => {
                                    event.preventDefault()
                                    $CreateRole.store.set({
                                        title: store().title,
                                        description: store().description,
                                        permissions: store().permissions.filter((p) => p.name !== permission.name)
                                    })
                                }}
                                fill="#fff"
                            >
                                <path d="M256-227.692 227.692-256l224-224-224-224L256-732.308l224 224 224-224L732.308-704l-224 224 224 224L704-227.692l-224-224-224 224Z" />
                            </svg>
                        </button>
                    </div>
                )}
            </For>
        </div>
    )
}

export default PermissionInputSelection
