'use client'
import { memo, useState, FormEvent, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'

import { Filter, Sort } from '@/components'

import styles from './toolbar.component.module.scss'
import ToolbarComponent from './toolbar.component.types'

const Toolbar: ToolbarComponent = memo(() => {
    const [sortBy, setSortBy] = useState<string>('MOST_RECENT')
    const router = useRouter()
    const pathname = usePathname()

    const handleSubmit = (event?: FormEvent) => {
        event && event.preventDefault()
        router.replace(pathname + `?sort=${sortBy}`)
    }

    useEffect(() => {
        handleSubmit()
    }, [sortBy])

    return (
        <form onSubmit={handleSubmit} className={styles.toolbar} role="toolbar">
            <Filter />
            <Sort sortBy={sortBy} setSortBy={setSortBy} />
        </form>
    )
})

Toolbar.displayName = Toolbar.name

export default Toolbar
