import { Column, Entity, ManyToOne } from 'typeorm'

import { ACCOUNT_TYPE } from '@/enums/index'
import Company from '../company.entity'
import BaseEntity from '../abstract/base-entity'

@Entity()
export default class Account extends BaseEntity implements Workspace.Entity.Account {
    @Column()
    accountName!: string

    @Column()
    accountNumber!: number

    @Column({ type: 'enum', enum: ACCOUNT_TYPE })
    type!: ACCOUNT_TYPE

    @ManyToOne(() => Company, (company) => company.accounts)
    company!: Company
}
