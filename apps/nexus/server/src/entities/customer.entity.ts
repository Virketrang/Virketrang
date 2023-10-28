import { Column, Entity, ManyToOne, OneToMany } from 'typeorm'
import { CUSTOMER_TYPE } from '@/enums/index'

import Order from './order.entity'
import Person from './abstract/person.entity'
import Company from './company.entity'

@Entity()
export default class Customer extends Person {
    @Column({ type: 'enum', enum: CUSTOMER_TYPE })
    type!: CUSTOMER_TYPE

    @OneToMany(() => Order, (order) => order.customer)
    orders!: Order[]

    @ManyToOne(() => Company, (company) => company.customers)
    company!: Company
}
