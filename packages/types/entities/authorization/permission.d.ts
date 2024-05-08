interface Permission extends Entity.BaseEntity {
    name: Enum.Authorization.Permission
    write: boolean
    read: boolean
    modify: boolean
    remove: boolean
}

declare namespace Permission {
    interface Create {
        name: Enum.Authorization.Permission
        write: boolean
        read: boolean
        modify: boolean
        remove: boolean
    }

    interface Insert {
        role_id: string
        name: Enum.Authorization.Permission
        write: boolean
        read: boolean
        modify: boolean
        remove: boolean
    }

    type Update = Partial<Create>
}

export default Permission
