interface Image extends Workspace.Entity.BaseEntity {
    alt: Workspace.I18N.Text
    width: number
    height: number
    url: string
    product: Workspace.Entity.Product
}

namespace Image {
    type Create = Omit<Image, 'id' | 'product'>

    type Update = Partial<Create>
}

export default Image
