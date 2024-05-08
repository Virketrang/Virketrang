import PermissionMenuHeader from './components/permission-menu-header/permission-menu-header.component'
import PermissionMenuList from './components/permission-menu-list/permission-menu-list.component'
import styles from './permission-menu.component.module.css'

const PermissionMenu = () => {
    return (
        <div
            class={styles.menu}
            position:absolute
            role="menu"
            left="0"
            right="0"
            top="4.75rem"
            background:primary
            flex
            flex-direction:column
            elevated
        >
            <PermissionMenuHeader />
            <PermissionMenuList />
        </div>
    )
}

export default PermissionMenu
