import { Column, Entity, ManyToOne, OneToMany } from 'typeorm'

import { INCOME_TYPE } from '@/enums/index'

import BaseEntity from '../abstract/base-entity'
import ProductionUnit from '../production-unit.entity'
import Payslip from '../payslip.entity'

@Entity()
export default class PayPeriod extends BaseEntity implements Workspace.Entity.PayPeriod {
    @Column()
    startDate!: Date

    @Column()
    endDate!: Date

    @ManyToOne(() => ProductionUnit, (productionUnit) => productionUnit.payPeriods)
    productionUnit!: ProductionUnit

    @Column({ type: 'enum', enum: INCOME_TYPE })
    incomeType!: INCOME_TYPE

    @OneToMany(() => Payslip, (payslip) => payslip.payPeriod)
    payslips!: Payslip[]
}
