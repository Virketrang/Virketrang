interface AnnualReport extends Workspace.Entity.BaseEntity {
    incomeStatements: Workspace.Entity.IncomeStatement[]

    balanceSheets: Workspace.Entity.BalanceSheet[]

    company: Workspace.Entity.Company

    startDate: Date

    endDate: Date
}

declare namespace AnnualReport {
    type Create = Omit<AnnualReport, keyof Workspace.Entity.BaseEntity>

    type Update = Partial<Create>
}

export default AnnualReport
