import { Currency, Dictionary } from '@/liedecke-noergaard/types'

export type FilterMenuProps = {
    dictionary: Dictionary<'filter'>
    divisions: Entity.Division[]
    open: boolean
    currency: Currency
    locale: I18N.Locale
}

type FilterMenuComponent = React.Component<FilterMenuProps>

export default FilterMenuComponent
