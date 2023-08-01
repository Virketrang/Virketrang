import { Dictionary } from '@/liedecke-noergaard/types'

type ProductListComponent = FunctionComponent<{
    dictionaries: { filter: Dictionary<'filter'>; product: Dictionary<'product'>; currency: Dictionary<'currency'> }
    products: Workspace.Entity.Product[]
    divisions: Workspace.Entity.Division[]
    locale: Workspace.I18N.Locale
}>

export default ProductListComponent
