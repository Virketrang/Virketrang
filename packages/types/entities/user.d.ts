interface User extends Entity.Person {
    username: string
    password: string
    active: boolean
    bank_account: Entity.BankAccount
    company: Entity.Company
    owner: boolean
    production_unit?: Entity.ProductionUnit
    payslips: Entity.Payslip[]
    employee_number: number
}

declare namespace User {
    interface Create extends Entity.Person.Create {
        username: string
        password: string
        active: boolean
        bank_account: Entity.BankAccount.Create
        employee_number: number
        owner: boolean
        production_unit_id: string
    }

    interface Insert extends Entity.Person.Insert {
        username: string
        password: string
        active: boolean
        bank_account_id: string
        company_id: string
        owner: boolean
        production_unit_id: string
        employee_number: number
    }

    type Update = Partial<Create>
}

export default User
