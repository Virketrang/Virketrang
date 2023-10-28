interface IncomeStatement extends Workspace.Entity.BaseEntity {
    annualReport: Workspace.Entity.AnnualReport
}

declare namespace IncomeStatement {
    type Create = Omit<Division, keyof Workspace.Entity.BaseEntity>

    type Update = Partial<Create>
}

export default IncomeStatement
