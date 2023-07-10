'use client'
import FilterComponent from './filter.component.types'
import styles from './filter.component.module.scss'

const Filter: FilterComponent = memo(({ open, onClick }) => {
    return (
        <button data-state-open={open} onClick={onClick} className={styles.filter}>
            Filter
        </button>
    )
})

Filter.displayName = Filter.name

export default Filter
