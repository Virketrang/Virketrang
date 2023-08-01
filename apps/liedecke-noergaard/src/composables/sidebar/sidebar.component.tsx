'use client'
import { Logo, ModalHeader } from '@/liedecke-noergaard/components'
import { useStore } from '@/liedecke-noergaard/common'
import { Person, Search } from '@/liedecke-noergaard/assets'

import SidebarComponent from './sidebar.types'
import styles from './sidebar.module.scss'

const Sidebar: SidebarComponent = memo(({ dictionary }) => {
    const { state, dispatch } = useStore()

    const handleClick = () => dispatch({ type: 'CLOSE_SIDEBAR' })

    return (
        <aside data-open={state.sidebar} className={styles.sidebar}>
            <ModalHeader title={dictionary.menu} onClick={handleClick} />
            <nav className={styles.navigation}>
                <ul>
                    <li>
                        <Link href="">{dictionary.confecture}</Link>
                    </li>
                    <li>
                        <Link href="">{dictionary.craftsmanship}</Link>
                    </li>
                    <li>
                        <Link href="">{dictionary.cider}</Link>
                    </li>
                    <li>
                        <Link href="">{dictionary.recipes}</Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.actions}>
                <button className={styles.search}>
                    <Search width={32} height={32} />
                    <span>{dictionary.search}</span>
                </button>
                <button className={styles.login}>
                    <Person width={32} height={32} />
                    <span>{dictionary.login}</span>
                </button>
            </div>
            <Logo className={styles.logo} country href="" />
        </aside>
    )
})

Sidebar.displayName = 'Sidebar'

export default Sidebar
