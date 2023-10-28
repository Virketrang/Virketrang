interface Role extends Workspace.Entity.BaseEntity {}

declare namespace Role {
    type Create = Omit<Role, keyof Workspace.Entity.BaseEntity>

    type Update = Partial<Create>
}

export default Role
