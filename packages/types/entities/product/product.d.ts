import { PRODUCT_CATEGORY } from '@/enums'

interface Product extends Workspace.Entity.BaseEntity {
    name: Workspace.I18N.Text

    description: Workspace.Entity.Description

    retailPrice: number

    costPrice: number

    deliveryTime: number

    stock: number

    available: boolean

    materials: string[]

    category: PRODUCT_CATEGORY

    createdAt?: Date

    measurement: Workspace.Entity.Measurement

    designer: string

    images: Workspace.Entity.Image[]

    subdivisions?: Workspace.Entity.Subdivision[]
}

declare namespace Product {
    type Create = Omit<Product, keyof Workspace.Entity.BaseEntity | 'images'>

    type Update = Partial<Create>
}

export default Product
