import { Column, Entity, ManyToOne, OneToMany } from 'typeorm'

import BaseEntity from './abstract/base-entity'
import Address from './abstract/address.entity'
import Company from './company.entity'
import User from './user.entity'
import PayPeriod from './accounting/pay-period.entity'

@Entity()
export default class ProductionUnit extends BaseEntity implements Workspace.Entity.ProductionUnit {
    @Column()
    number!: number

    @Column(() => Address)
    address!: Address

    @ManyToOne(() => Company, (company) => company.productionUnits)
    company!: Company

    @OneToMany(() => User, (user) => user.productionUnit, { nullable: true })
    users!: User[]

    @OneToMany(() => PayPeriod, (payPeriod) => payPeriod.productionUnit)
    payPeriods!: PayPeriod[]
}
