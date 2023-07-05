import { memo } from 'react'

import Option from './option/option.component'
import FilterCategoryComponent from './filter-category.component.types'
import styles from './filter-category.component.module.scss'
import OptionComponent from './option/option.component.types'

const FilterCategory: FilterCategoryComponent = memo(({ title, children }) => {
    return (
        <div className={styles.category}>
            <h4 className={styles.title}>{title}</h4>
            <ul className={styles.options}>{children}</ul>
        </div>
    )
})

FilterCategory.displayName = FilterCategory.name

export default Object.assign(FilterCategory, { Option: Option })
