interface BalanceSheet extends Workspace.Entity.BaseEntity {
    annualReport: Workspace.Entity.AnnualReport
}

declare namespace BalanceSheet {
    type Create = Omit<BalanceSheet, keyof Workspace.Entity.BaseEntity>

    type Update = Partial<Create>
}

export default BalanceSheet
