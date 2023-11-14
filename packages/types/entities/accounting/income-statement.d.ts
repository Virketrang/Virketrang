interface IncomeStatement extends Entity.BaseEntity {
    annual_report: Entity.AnnualReport
}

declare namespace IncomeStatement {
    type Create = Omit<IncomeStatement, keyof Entity.BaseEntity>

    type Update = Partial<Create>
}

export default IncomeStatement
