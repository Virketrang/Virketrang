interface Role extends Entity.BaseEntity {
    title: string
    description: string
    permissions: Entity.Permission[]
}

declare namespace Role {
    interface Create {
        title: string
        description: string
        permissions: Entity.Permission.Create[]
    }

    interface Insert {
        company_id: string
        title: string
        description: string
    }

    type Update = Partial<Create>
}

export default Role
