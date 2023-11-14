interface ApiKey extends Entity.BaseEntity {
    name: string
    key: string
    permissions: Entity.Permission[]
}

declare namespace ApiKey {
    type Create = Omit<ApiKey, keyof Entity.BaseEntity>

    type Update = Partial<Create>
}

export default ApiKey
