import { useShortcut, numberToPath } from '@/nexus/common'

import NavigationComponent from './navigation.component.types'
import styles from './navigation.component.module.css'

const tabs = ['1', '2', '3', '4', '5', '6', '7'] as const

const Navigation: NavigationComponent = memo(() => {
    const navigate = useNavigate()
    useShortcut('metaKey', tabs, (key: any) => navigate(numberToPath(key)))

    return (
        <nav className={styles.navigation}>
            <ul className={styles.list}>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? styles.active : '')} to="/">
                        Oversigt
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? styles.active : '')} to="/orders">
                        Ordrer
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? styles.active : '')} to="/products">
                        Produkter
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? styles.active : '')} to="/employees">
                        Medarbejdere
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? styles.active : '')} to="/website">
                        Hjemmeside
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? styles.active : '')} to="/accounting">
                        Bogføring
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? styles.active : '')} to="/customers">
                        Kundekartotek
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
})

Navigation.displayName = Navigation.name

export default Navigation
