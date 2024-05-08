interface ApiKey extends Entity.BaseEntity {
    name: string
    description: string
    key: string
    permissions: Entity.Permission[]
}

declare namespace ApiKey {
    interface Create {
        name: string
        description: string
        key: string
        permissions: Entity.Permission.Create[]
    }

    interface Insert {
        name: string
        description: string
        key: string
        company_id: string
    }

    type Update = Partial<Create>
}

export default ApiKey
