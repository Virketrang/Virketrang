interface Company extends Entity.BaseEntity {
    company_name: string

    company_number: number

    accounting_class: Enum.ACCOUNTING_CLASS

    corporate_form: Enum.CORPORATE_FORM

    annual_reports?: Entity.AnnualReport[]

    accounts?: Entity.Account[]

    customers?: Entity.Customer[]

    employer: boolean

    users: Entity.User[]

    content_types?: Entity.ContentType[]

    vat_codes?: Entity.VatCode[]

    production_units: Entity.ProductionUnit[]

    phone_number: Entity.PhoneNumber

    address: Entity.Address

    bank_account: Entity.BankAccount
}

declare namespace Company {
    interface Create {
        company_name: string

        company_number: number

        accounting_class: Enum.ACCOUNTING_CLASS

        corporate_form: Enum.CORPORATE_FORM

        employer: boolean

        users: Entity.User.Create[]

        address: Entity.Address.Create

        bank_account: Entity.BankAccount.Create

        phone_number: Entity.PhoneNumber.Create

        production_units: Entity.ProductionUnit.Create[]
    }

    interface Insert {
        company_name: string

        company_number: number

        accounting_class: Enum.ACCOUNTING_CLASS

        corporate_form: Enum.CORPORATE_FORM

        employer: boolean

        address_id: string

        bank_account_id: string

        phone_number_id: string
    }

    type Update = Partial<Create>
}

export default Company
