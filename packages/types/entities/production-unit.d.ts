interface ProductionUnit extends Workspace.Entity.BaseEntity {
    number: number
    address: Workspace.Entity.Address
    company: Workspace.Entity.Company
    users?: Workspace.Entity.User[]
}

declare namespace ProductionUnit {
    type Create = Omit<ProductionUnit, keyof Workspace.Entity.BaseEntity>

    type Update = Partial<Create>
}

export default ProductionUnit
