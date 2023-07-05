import { memo } from 'react'
import Link from 'next/link'

import NavigationComponent from './navigation.types'
import styles from './navigation.module.scss'

const Navigation: NavigationComponent = memo(({ dictionary: { confecture, craftsmanship, cider, recipes } }) => {
    return (
        <nav className={styles.navigation}>
            <Link href="/products/confecture">{confecture}</Link>
            <Link href="/products/craftmansship">{craftsmanship}</Link>
            <Link href="/products/cider">{cider}</Link>
            <Link href="/recipes">{recipes}</Link>
        </nav>
    )
})

Navigation.displayName = 'Navigation'

export default Navigation
