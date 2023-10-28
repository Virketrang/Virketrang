import { ACCOUNT_TYPE } from '@/enums'

interface Account extends Workspace.Entity.BaseEntity {
    accountName: string

    accountNumber: number

    type: ACCOUNT_TYPE

    company: Workspace.Entity.Company
}

declare namespace Account {
    type Create = Omit<Account, keyof Workspace.Entity.BaseEntity>

    type Update = Partial<Create>
}

export default Account
