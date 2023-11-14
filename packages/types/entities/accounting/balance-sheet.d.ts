interface BalanceSheet extends Entity.BaseEntity {
    annual_report: Entity.AnnualReport
}

declare namespace BalanceSheet {
    type Create = Omit<BalanceSheet, keyof Entity.BaseEntity>

    type Update = Partial<Create>
}

export default BalanceSheet
