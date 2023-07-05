import { PRODUCT_CATEGORY } from '../../../enums'
import Image from '../image/image'

interface Product {
    id: string
    name: string
    description: { short: string; long: string }
    retailPrice: number
    costPrice: number
    stock: number
    images: Image[]
    category: PRODUCT_CATEGORY
    // category: string
    available: boolean
    materials: string[]
    measurement: { unit: string; value: number }
    deliveryTime: number
    createdAt: Date
}

export default Product
