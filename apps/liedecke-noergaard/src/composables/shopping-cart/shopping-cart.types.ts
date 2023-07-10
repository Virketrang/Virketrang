import { Dictionary, Locale } from '@/types'

type ShoppingCartComponent = FunctionComponent<{
    dictionaries: { shoppingCart: Dictionary<'shoppingCart'>; currency: Dictionary<'currency'> }
    locale: Locale
}>

export default ShoppingCartComponent
