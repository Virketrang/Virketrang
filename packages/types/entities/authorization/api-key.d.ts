interface ApiKey extends Workspace.Entity.BaseEntity {
    name: string
    key: string
    permissions: Workspace.Entity.Permission[]
}

declare namespace ApiKey {
    type Create = Omit<ApiKey, keyof Workspace.Entity.BaseEntity>

    type Update = Partial<Create>
}

export default ApiKey
