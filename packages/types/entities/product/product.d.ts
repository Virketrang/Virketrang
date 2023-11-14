interface Product extends Entity.BaseEntity {
    name: I18N.Text

    description: Entity.Description

    retail_price: number

    cost_price: number

    delivery_time: number

    stock: number

    available: boolean

    materials: string[]

    category: Enum.PRODUCT_CATEGORY

    measurement: Entity.Measurement

    designer: string

    images: Entity.Image[]

    subdivisions?: Entity.Subdivision[]
}

declare namespace Product {
    type Create = Omit<Product, keyof Entity.BaseEntity | 'images'>

    type Update = Partial<Create>
}

export default Product
