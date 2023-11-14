interface Account extends Entity.BaseEntity {
    account_name: string

    account_number: number

    type: Enum.ACCOUNT_TYPE

    company: Entity.Company
}

declare namespace Account {
    type Create = Omit<Account, keyof Entity.BaseEntity>

    type Update = Partial<Create>
}

export default Account
