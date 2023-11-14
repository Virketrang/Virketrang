interface ContentType extends Entity.BaseEntity {
    name: string
    fields: Entity.ContentTypeField[]
    company: Entity.Company
    contents: Entity.Content[]
}

declare namespace ContentType {
    type Create = Omit<ContentType, keyof Entity.BaseEntity>

    type Update = Partial<Create>
}

export default ContentType
