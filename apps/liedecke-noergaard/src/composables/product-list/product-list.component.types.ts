import { Entity } from '@/packages/interfaces'

import { Dictionary, Locale } from '@/types'

type ProductListComponent = FunctionComponent<{
    dictionaries: { filter: Dictionary<'filter'>; product: Dictionary<'product'>; currency: Dictionary<'currency'> }
    products: Entity.Product[]
    divisions: Entity.Division.Retrieve[]
    locale: Locale
}>

export default ProductListComponent
