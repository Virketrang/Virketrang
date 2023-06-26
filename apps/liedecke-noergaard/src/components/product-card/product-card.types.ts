import { FunctionComponent } from 'react'

import { Dictionary } from '@/types'

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
}>

export default ProductCardComponent
