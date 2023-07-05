import { PRODUCT_CATEGORY } from '../../../enums'

interface CreateProduct {
    name: string
    stock: string
    description: { short: string; long: string }
    retailPrice: string
    // category: string
    category: PRODUCT_CATEGORY
    costPrice: string
    available?: boolean
    materials: string[]
    measurement: { unit: string; value: number }
    deliveryTime: number
}

export default CreateProduct
