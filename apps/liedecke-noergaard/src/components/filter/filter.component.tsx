'use client'
import { memo } from 'react'

import FilterComponent from './filter.component.types'
import styles from './filter.component.module.scss'

const Filter: FilterComponent = memo(() => {
    return <button className={styles.filter}>Filter</button>
})

Filter.displayName = Filter.name

export default Filter
