interface Employee extends Entity.BaseEntity {
    employee_number: number
    email: string
    password: string
    profile: Entity.Profile
    contact_info: Entity.ContactInfo
    bank_account: Entity.BankAccount
    production_unit: Entity.ProductionUnit
    role: Entity.Role
}

declare namespace Employee {
    type Create = Omit<Employee, keyof Entity.BaseEntity>

    type Insert = Create

    type Update = Partial<Create>
}

export default Employee
