interface ContentType extends Workspace.Entity.BaseEntity {
    name: string
    fields: Workspace.Entity.ContentTypeField[]
    company: Workspace.Entity.Company
    contents: Workspace.Entity.Content[]
}

declare namespace ContentType {
    type Create = Omit<ContentType, keyof Workspace.Entity.BaseEntity>

    type Update = Partial<Create>
}

export default ContentType
