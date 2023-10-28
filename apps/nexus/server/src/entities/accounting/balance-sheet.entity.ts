import { Entity, ManyToOne } from 'typeorm'
import AnnualReport from './annual-report.entity'
import BaseEntity from '../abstract/base-entity'

@Entity()
export default class BalanceSheet extends BaseEntity implements Workspace.Entity.BalanceSheet {
    @ManyToOne(() => AnnualReport, (annualReport) => annualReport.balanceSheets)
    annualReport!: AnnualReport
}
