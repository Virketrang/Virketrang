import { Search } from '@/nexus/assets'
import { useShortcut } from '@/nexus/common'

import SearchBarComponent from './search-bar.component.types'
import styles from './search-bar.component.module.css'

const SearchBar: SearchBarComponent = memo(() => {
    const input = createRef<HTMLInputElement>()
    useShortcut('metaKey', ['k'], () => input.current?.focus())

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit} className={styles.searchbar} role="searchbox">
            <button className={styles.button}>
                <Search />
            </button>
            <input ref={input} className={styles.input} type="text" placeholder="Søg..." />
            <span className={styles.tooltip} role="tooltip">
                ⌘K
            </span>
        </form>
    )
})

SearchBar.displayName = 'SearchBar'

export default SearchBar
