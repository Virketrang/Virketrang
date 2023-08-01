import { Currency, Dictionary } from '@/liedecke-noergaard/types'

export type FilterMenuProps = {
    dictionary: Dictionary<'filter'>
    divisions: Workspace.Entity.Division[]
    open: boolean
    currency: Currency
    locale: Workspace.I18N.Locale
}

type FilterMenuComponent = React.Component<FilterMenuProps>

export default FilterMenuComponent
