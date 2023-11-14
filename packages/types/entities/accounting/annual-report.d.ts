interface AnnualReport extends Entity.BaseEntity {
    income_statements: Entity.IncomeStatement[]

    balance_sheets: Entity.BalanceSheet[]

    company: Entity.Company

    start_date: Date

    end_date: Date
}

declare namespace AnnualReport {
    type Create = Omit<AnnualReport, keyof Entity.BaseEntity>

    type Update = Partial<Create>
}

export default AnnualReport
