import { Entity, ManyToOne } from 'typeorm'
import AnnualReport from './annual-report.entity'
import BaseEntity from '../abstract/base-entity'

@Entity()
export default class IncomeStatement extends BaseEntity implements Workspace.Entity.IncomeStatement {
    @ManyToOne(() => AnnualReport, (annualReport) => annualReport.balanceSheets)
    annualReport!: AnnualReport
}
