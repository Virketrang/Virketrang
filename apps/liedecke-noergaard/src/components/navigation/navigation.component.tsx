import { memo } from 'react'
import Link from 'next/link'

import NavigationComponent from './navigation.types'
import styles from './navigation.module.scss'

const Navigation: NavigationComponent = memo(({ dictionary: { confecture, craftsmanship, cider, recipes } }) => {
    return (
        <nav className={styles.navigation}>
            <Link href="">{confecture}</Link>
            <Link href="">{craftsmanship}</Link>
            <Link href="">{cider}</Link>
            <Link href="">{recipes}</Link>
        </nav>
    )
})

Navigation.displayName = 'Navigation'

export default Navigation
