interface Image extends Entity.BaseEntity {
    alt: I18N.Text
    width: number
    height: number
    url: string
    file_name: string
}

declare namespace Image {
    interface Create {
        alt: I18N.Text
        width: number
        height: number
        url: string
        owner_id: string
        buffer: Buffer
        file_name: string
        relation: 'product' | 'content'
    }

    interface Insert {
        width: number
        height: number
        url: string
        file_name: string
    }

    type Update = Partial<Create>
}

export default Image
