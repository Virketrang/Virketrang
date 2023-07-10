import { Entity } from '@/packages/interfaces'
import { Currency, Dictionary, Locale } from '@/types'

export type FilterMenuProps = {
    dictionary: Dictionary<'filter'>
    divisions: Entity.Division.Retrieve[]
    open: boolean
    currency: Currency
    locale: Locale
}

type FilterMenuComponent = React.Component<FilterMenuProps>

export default FilterMenuComponent
