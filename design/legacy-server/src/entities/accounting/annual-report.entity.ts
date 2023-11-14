import { Column, Entity, ManyToOne, OneToMany } from 'typeorm'
import BalanceSheet from './balance-sheet.entity'
import IncomeStatement from './income-statement.entity'
import Company from '../company.entity'
import BaseEntity from '../abstract/base-entity'

@Entity()
export default class AnnualReport extends BaseEntity implements Workspace.Entity.AnnualReport {
    @OneToMany(() => IncomeStatement, (incomeStatement) => incomeStatement.annualReport)
    incomeStatements!: IncomeStatement[]

    @OneToMany(() => BalanceSheet, (balanceSheet) => balanceSheet.annualReport)
    balanceSheets!: BalanceSheet[]

    @ManyToOne(() => Company, (company) => company.annualReports)
    company!: Company

    @Column()
    startDate!: Date

    @Column()
    endDate!: Date
}
