import { useShortcut, numberToPath } from '@/nexus/client/common'

import NavigationComponent from './navigation.component.types'
import styles from './navigation.component.module.css'

const tabs = ['1', '2', '3', '4', '5', '6', '7'] as const

const Navigation: NavigationComponent = memo(() => {
    return (
        <nav className={styles.navigation}>
            <ul className={styles.list}>
                <li>Oversigt</li>
                <li>Ordrer</li>
                <li>Produkter</li>
                <li>Medarbejdere</li>
                <li>Hjemmeside</li>
                <li>Bogføring</li>
                <li>Kundekartotek</li>
            </ul>
        </nav>
    )
})

Navigation.displayName = Navigation.name

export default Navigation
