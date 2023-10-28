interface Content extends Workspace.Entity.BaseEntity {
    contentType: Workspace.Entity.ContentType
    value: object
    published: boolean
}

declare namespace Content {
    type Create = Omit<Content, keyof Workspace.Entity.BaseEntity>

    type Update = Partial<Create>
}

export default Content
