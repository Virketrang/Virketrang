interface ContentTypeField extends Entity.BaseEntity {
    name: string
    type: string
    content_type: Entity.ContentType
}

declare namespace ContentTypeField {
    type Create = Omit<ContentTypeField, keyof Entity.BaseEntity>

    type Update = Partial<Create>
}

export default ContentTypeField
