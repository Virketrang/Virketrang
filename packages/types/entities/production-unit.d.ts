interface ProductionUnit extends Entity.BaseEntity {
    unit_number: number
    primary_location: boolean
    address: Entity.Address
    company: Entity.Company
    employees?: Entity.Employee[]
}

declare namespace ProductionUnit {
    interface Create {
        unit_number: number
        primary_location?: boolean
        address: Entity.Address.Create
    }

    interface Insert {
        unit_number: number
        primary_location?: boolean
        address_id: string
        company_id: string
    }

    interface CreateUserRelation {
        productionUnitId: string
        userId: string
        primaryLocation: boolean
    }

    interface CreateCompanyRelation {
        productionUnitId: string
        companyId: string
        primaryLocation: boolean
    }

    type Update = Partial<Create>
}

export default ProductionUnit
