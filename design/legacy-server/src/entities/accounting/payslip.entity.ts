import { Column, Entity, ManyToOne } from 'typeorm'

import User from '../user.entity'
import BaseEntity from '../abstract/base-entity'
import PayPeriod from './pay-period.entity'

@Entity()
export default class Payslip extends BaseEntity implements Workspace.Entity.Payslip {
    @ManyToOne(() => User, (user) => user.payslips)
    user!: User

    @Column()
    grossPay!: number

    @Column()
    hours!: number

    @ManyToOne(() => PayPeriod, (payPeriod) => payPeriod.payslips)
    payPeriod!: PayPeriod
}
