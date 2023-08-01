import { Enums } from '@/enums'

interface Product extends Workspace.Entity.BaseEntity {
    name: Workspace.I18N.Text

    description: Workspace.Entity.Description

    retailPrice: number

    costPrice: number

    deliveryTime: number

    stock: number

    available: boolean

    materials: string[]

    category: Enums.PRODUCT_CATEGORY

    createdAt?: Date

    measurement: Workspace.Entity.Measurement

    designer: string

    images: Workspace.Entity.Image[]

    subdivisions?: Workspace.Entity.Subdivision[]
}

namespace Product {
    type Create = Omit<Product, 'id' | 'createdAt' | 'images'>

    type Update = Partial<Create>
}

export default Product
