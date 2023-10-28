import { ACCOUNTING_CLASS, CORPORATE_FORM } from '../../../packages/enums'

interface Company extends Workspace.Entity.BaseEntity {
    name: string

    companyNumber: number

    accountingClass?: ACCOUNTING_CLASS

    corporateForm: CORPORATE_FORM

    annualReports?: Workspace.Entity.AnnualReport[]

    accounts?: Workspace.Entity.Account[]

    customers?: Workspace.Entity.Customer[]

    employer: boolean

    users?: Workspace.Entity.User[]

    contentTypes?: Workspace.Entity.ContentType[]

    vatCodes?: Workspace.Entity.VatCode[]

    productionUnits?: Workspace.Entity.ProductionUnit[]

    phone: Workspace.Entity.PhoneNumber

    address: Workspace.Entity.Address
}

declare namespace Company {
    type Create = Omit<Company, keyof Workspace.Entity.BaseEntity>

    type Update = Partial<Create>
}

export default Company
