import { FunctionComponent } from 'react'

import { Dictionary } from '@/types'

type ShoppingCartComponent = FunctionComponent<{
    dictionaries: { shoppingCart: Dictionary<'shoppingCart'>; currency: Dictionary<'currency'> }
}>

export default ShoppingCartComponent
