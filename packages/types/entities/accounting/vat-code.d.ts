interface VatCode extends Entity.BaseEntity {
    name: string
    rate: number
    company: Entity.Company
}

declare namespace VatCode {
    type Create = Omit<VatCode, keyof Entity.BaseEntity>

    type Update = Partial<Create>
}

export default VatCode
