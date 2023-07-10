import { Dictionary, Locale } from '@/types'

type ProductCardComponent = FunctionComponent<{
    product: {
        id: string
        recent: boolean
        price: number
        name: string
        images: {
            distant: { src: string; alt: string }
            close: { src: string; alt: string }
        }
        materials: string
    }
    dictionaries: { product: Dictionary<'product'>; currency: Dictionary<'currency'> }
    locale: Locale
}>

export default ProductCardComponent
