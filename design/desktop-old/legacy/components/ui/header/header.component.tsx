import { BusinessSelect, Navigation, SearchBar, ThemeSwitch } from '@/nexus/client/components'
import { Person, Settings } from '@/nexus/client/assets'

import styles from './header.component.module.css'
import HeaderComponent from './header.component.types'

const Header: HeaderComponent = memo(() => {
    return (
        <header>
            <div className={styles.appbar}>
                <BusinessSelect />
                <SearchBar />
                <div className={styles.toolbar}>
                    <button>
                        <Person />
                    </button>
                    <ThemeSwitch />
                    <button>
                        <Settings />
                    </button>
                </div>
            </div>
            <Navigation />
        </header>
    )
})

Header.displayName = 'Header'

export default Header
