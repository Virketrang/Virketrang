import { Column, Entity, ManyToOne, OneToMany } from 'typeorm'

import { GENDER } from '@/enums/index'

import Person from './abstract/person.entity'
import Bank from './abstract/bank.entity'
import Company from './company.entity'
import ProductionUnit from './production-unit.entity'
import Payslip from './payslip.entity'

@Entity()
export default class User extends Person implements Workspace.Entity.User {
    @Column({ unique: true })
    username!: string

    @Column()
    password!: string

    @Column({ default: true })
    active!: boolean

    @Column(() => Bank)
    bank!: Bank

    @ManyToOne(() => Company, (company) => company.users)
    company!: Company

    @Column()
    owner!: boolean

    @ManyToOne(() => ProductionUnit, (productionUnit) => productionUnit.users, { nullable: true })
    productionUnit!: ProductionUnit

    @OneToMany(() => Payslip, (payslip) => payslip.user)
    payslips!: Payslip[]

    @Column()
    employeeNumber!: number

    @Column()
    birthDate!: Date

    @Column({ type: 'enum', enum: GENDER })
    gender!: GENDER
}
