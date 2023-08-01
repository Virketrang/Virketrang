import { Dictionary } from '@/liedecke-noergaard/types'

type ProductCardComponent = FunctionComponent<{
    product: {
        id: string
        recent: boolean
        price: number
        name: string
        images: {
            distant: { src: string; alt: Workspace.I18N.Text }
            close: { src: string; alt: Workspace.I18N.Text }
        }
        materials: string
    }
    dictionaries: { product: Dictionary<'product'>; currency: Dictionary<'currency'> }
    locale: Workspace.I18N.Locale
}>

export default ProductCardComponent
