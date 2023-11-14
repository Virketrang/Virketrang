interface BankAccount extends Entity.BaseEntity {
    registration_number: number

    account_number: number

    swift?: string

    iban?: string
}

declare namespace BankAccount {
    type Create = Omit<BankAccount, keyof Entity.BaseEntity>

    type Insert = Create

    type Update = Partial<Create>
}

export default BankAccount
