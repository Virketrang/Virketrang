interface Content extends Entity.BaseEntity {
    content_type: Entity.ContentType
    value: object
    published: boolean
}

declare namespace Content {
    type Create = Omit<Content, keyof Entity.BaseEntity>

    type Update = Partial<Create>
}

export default Content
