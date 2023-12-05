interface User extends Entity.Person {
    email: string
    bank_account: Entity.BankAccount
    companies?: Entity.Company[]
    payslips: Entity.Payslip[]
}

declare namespace User {
    interface WithPassword extends User {
        password: string
    }

    interface Create extends Entity.Person.Create {
        email: string
        password: string
        bank_account: Entity.BankAccount.Create
    }

    interface Insert extends Entity.Person.Insert {
        email: string
        password: string
        bank_account_id: string
    }

    type Update = Partial<Create>
}

export default User
