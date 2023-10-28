import { Column, Entity, OneToMany } from 'typeorm'

import { ACCOUNTING_CLASS, CORPORATE_FORM } from '@/enums/index'

import AnnualReport from './accounting/annual-report.entity'
import Account from './accounting/account.entity'
import Customer from './customer.entity'
import BaseEntity from './abstract/base-entity'
import ProductionUnit from './production-unit.entity'
import User from './user.entity'
import { ContentType } from './cms'
import { VatCode } from './accounting'
import Address from './abstract/address.entity'
import PhoneNumber from './abstract/phone-number.entity'

@Entity()
export default class Company extends BaseEntity implements Workspace.Entity.Company {
    @Column()
    name!: string

    @Column(() => Address)
    address!: Address

    @Column(() => PhoneNumber)
    phone!: PhoneNumber

    @Column({ type: 'enum', enum: CORPORATE_FORM })
    corporateForm!: CORPORATE_FORM

    @Column()
    companyNumber!: number

    @Column({ type: 'enum', enum: ACCOUNTING_CLASS, nullable: true })
    accountingClass!: ACCOUNTING_CLASS

    @OneToMany(() => ProductionUnit, (productionUnit) => productionUnit.company)
    productionUnits!: ProductionUnit[]

    @Column({ default: false })
    employer!: boolean

    @OneToMany(() => AnnualReport, (annualReport) => annualReport.company, { nullable: true })
    annualReports!: AnnualReport[]

    @OneToMany(() => Account, (account) => account.company, { nullable: true })
    accounts!: Account[]

    @OneToMany(() => User, (user) => user.company, { nullable: true })
    users!: User[]

    @OneToMany(() => Customer, (customer) => customer.company, { nullable: true })
    customers!: Customer[]

    @OneToMany(() => ContentType, (contentType) => contentType.company, { nullable: true })
    contentTypes!: ContentType[]

    @OneToMany(() => VatCode, (vatCode) => vatCode.company, { nullable: true })
    vatCodes!: VatCode[]
}
