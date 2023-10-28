interface User extends Workspace.Entity.BaseEntity {
    username: string
    password: string
    active?: boolean
    bank: Workspace.Entity.Bank
    company: Workspace.Entity.Company
    owner: boolean
    productionUnit?: Workspace.Entity.ProductionUnit
    payslips: Workspace.Entity.Payslip[]
    employeeNumber: number
    birthDate?: Date
}

declare namespace User {
    type Create = Omit<User, keyof Workspace.Entity.BaseEntity | 'name'>

    type Update = Partial<Create>
}

export default User
