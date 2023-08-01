import { __server__ } from '@/liedecke-noergaard/common'
import { FilterCategory, PriceRangeSelector } from '@/liedecke-noergaard/components'

import styles from './filter-menu.component.module.scss'
import FilterMenuComponent, { FilterMenuProps } from './filter-menu.component.types'

const FilterMenu = memo(({ divisions, open, currency, locale }: FilterMenuProps) => {
    return (
        <aside data-state-open={open} className={styles.menu}>
            {divisions.map((division) => (
                <FilterCategory key={division.id} title={division.name[locale]}>
                    {division.subdivisions &&
                        division.subdivisions.map((subdivision) => (
                            <FilterCategory.Option key={subdivision.id} value={subdivision.name[locale]} />
                        ))}
                </FilterCategory>
            ))}
            <PriceRangeSelector locale={locale} currency={currency} />
        </aside>
    )
})

FilterMenu.displayName = FilterMenu.name

export default FilterMenu
