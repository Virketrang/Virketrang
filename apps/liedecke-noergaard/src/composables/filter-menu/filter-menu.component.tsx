import { memo } from 'react'

import styles from './filter-menu.component.module.scss'
import FilterMenuComponent from './filter-menu.component.types'
import { FilterCategory } from '@/components'

const FilterMenu: FilterMenuComponent = memo(({ dictionary }) => {
    return (
        <aside className={styles.menu}>
            <FilterCategory title={dictionary.collection.title}>
                {dictionary.collection.values.map((value) => (
                    <FilterCategory.Option key={value} value={value} />
                ))}
            </FilterCategory>
        </aside>
    )
})

FilterMenu.displayName = FilterMenu.name

export default FilterMenu
