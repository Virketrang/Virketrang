interface ContentTypeField extends Workspace.Entity.BaseEntity {
    name: string
    type: string
    contentType: Workspace.Entity.ContentType
}

declare namespace ContentTypeField {
    type Create = Omit<ContentTypeField, keyof Workspace.Entity.BaseEntity>

    type Update = Partial<Create>
}

export default ContentTypeField
