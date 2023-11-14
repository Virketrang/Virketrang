interface Image extends Entity.BaseEntity {
    alt: I18N.Text
    width: number
    height: number
    url: string
    product: Entity.Product
}

declare namespace Image {
    type Create = Omit<Image, keyof Entity.BaseEntity | 'product'>

    type Update = Partial<Create>
}

export default Image
