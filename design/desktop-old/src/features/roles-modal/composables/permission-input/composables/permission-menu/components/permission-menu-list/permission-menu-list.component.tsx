import PermissionInputLogic from '../../../../permission-input.component.logic'
import permissions from '../../../../permissions-input.component.data'
import styles from './permission-menu-list.component.module.css'

const PermissionMenuList = () => {
    const store = useStore($CreateRole.store)

    const isAllChecked = (value: Enum.Authorization.Permission) => {
        const permission = store().permissions.find((p) => p.name === value)
        if (permission) {
            return permission.read && permission.write && permission.modify && permission.remove
        } else {
            return false
        }
    }

    return (
        <ul class={styles.options}>
            <For each={permissions}>
                {(permission) => (
                    <li flex justify-content:between align-items:center id={permission.value} role="menuitem">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16">
                                <path d={permission.icon} />
                            </svg>
                            <span>{permission.label}</span>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                name="read"
                                onClick={() => {
                                    PermissionInputLogic.handleSpecificCheckbox(store, permission.value, 'read')
                                }}
                                checked={store().permissions.find((p) => p.name === permission.value)?.read}
                            />
                            <input
                                type="checkbox"
                                name="write"
                                onClick={() => {
                                    PermissionInputLogic.handleSpecificCheckbox(store, permission.value, 'write')
                                }}
                                checked={store().permissions.find((p) => p.name === permission.value)?.write}
                            />
                            <input
                                type="checkbox"
                                name="modify"
                                onClick={() => {
                                    PermissionInputLogic.handleSpecificCheckbox(store, permission.value, 'modify')
                                }}
                                checked={store().permissions.find((p) => p.name === permission.value)?.modify}
                            />
                            <input
                                type="checkbox"
                                name="remove"
                                onClick={() => {
                                    PermissionInputLogic.handleSpecificCheckbox(store, permission.value, 'remove')
                                }}
                                checked={store().permissions.find((p) => p.name === permission.value)?.remove}
                            />
                            <input
                                type="checkbox"
                                name="all"
                                onClick={() => {
                                    PermissionInputLogic.handleAllCheckbox(store, permission.value)
                                }}
                                checked={isAllChecked(permission.value)}
                            />
                        </div>
                    </li>
                )}
            </For>
        </ul>
    )
}

export default PermissionMenuList
