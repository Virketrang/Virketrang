'use client'
import { memo, useState } from 'react'

import { Select } from '@/components'

import styles from './sort.component.module.scss'
import SortComponent from './sort.component.types'

const Sort: SortComponent = memo(({ sortBy, setSortBy }) => {
    return (
        <Select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
            <option value="MOST_RECENT">Nyeste</option>
            <option value="ALPHABETICALLY">Alfabetisk</option>
            <option value="PRICE_ASSENDING">Pris stigende</option>
            <option value="PRICE_DECENDING">Pris faldende</option>
        </Select>
    )
})

Sort.displayName = Sort.name

export default Sort
