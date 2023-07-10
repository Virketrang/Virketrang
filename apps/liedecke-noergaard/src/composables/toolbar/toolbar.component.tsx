'use client'
import { Filter, Sort } from '@/components'

import styles from './toolbar.component.module.scss'
import ToolbarComponent from './toolbar.component.types'

const Toolbar: ToolbarComponent = memo(({ sortBy, setSortBy, open, setOpen }) => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    return (
        <form className={styles.toolbar} role="toolbar" onSubmit={handleSubmit}>
            <Filter open={open} onClick={() => setOpen((prevState) => !prevState)} />
            <Sort sortBy={sortBy} setSortBy={setSortBy} />
        </form>
    )
})

Toolbar.displayName = Toolbar.name

export default Toolbar
