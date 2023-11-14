interface Role extends Entity.BaseEntity {}

declare namespace Role {
    type Create = Omit<Role, keyof Entity.BaseEntity>

    type Update = Partial<Create>
}

export default Role
