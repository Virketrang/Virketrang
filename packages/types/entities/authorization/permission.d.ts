interface Permission extends Workspace.Entity.BaseEntity {}

declare namespace Permission {
    type Create = Omit<Permission, keyof Workspace.Entity.BaseEntity>

    type Update = Partial<Create>
}

export default Permission
