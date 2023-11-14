interface ProductionUnit extends Entity.BaseEntity {
    unit_number: number
    address: Entity.Address
    company: Entity.Company
    users?: Entity.User[]
}

declare namespace ProductionUnit {
    interface Create {
        unit_number: number
        address: Entity.Address.Create
    }

    interface Insert {
        unit_number: number
        address_id: string
        company_id: string
    }

    type Update = Partial<Create>
}

export default ProductionUnit
