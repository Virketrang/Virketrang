import { useEffect } from 'react'
import { Search } from '../../../assets'

const SearchBar = () => {
    useEffect(() => {
        document.addEventListener('keydown', (event) => {
            if (event.key === 's' && event.metaKey) {
                event.preventDefault()
                const searchBar = document.getElementById('search')
                if (searchBar) {
                    searchBar.focus()
                }
            }
        })
    })

    return (
        <form className="w-full max-w-[600px] h-10 rounded bg-primary flex fill-[rgba(0, 0, 0, 0.5)] text-[rgba(0, 0, 0, 0.5)]">
            <button className="shadow grid place-items-center flex-shrink-0 w-10">
                <Search />
            </button>
            <input className="w-full border-none pl-4 outline-none" type="text" id="search" placeholder="Søg..." />
            <span className="grid place-items-center flex-shrink-0 w-10" role="tooltip">
                ⌘S
            </span>
        </form>
    )
}

export default SearchBar
