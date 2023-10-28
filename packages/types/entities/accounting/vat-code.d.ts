interface VatCode extends Workspace.Entity.BaseEntity {
    name: string
    rate: number
    company: Workspace.Entity.Company
}

declare namespace VatCode {
    type Create = Omit<Division, keyof Workspace.Entity.BaseEntity>

    type Update = Partial<Create>
}

export default VatCode
