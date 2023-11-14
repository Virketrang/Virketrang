interface Permission extends Entity.BaseEntity {}

declare namespace Permission {
    type Create = Omit<Permission, keyof Entity.BaseEntity>

    type Update = Partial<Create>
}

export default Permission
