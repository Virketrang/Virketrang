import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { CUSTOMER_TYPE } from '../../../packages/enums'

import Order from './order.entity'
import Person from './abstract/person.entity'

@Entity()
export default class Customer extends Person {
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column({ type: 'enum', enum: CUSTOMER_TYPE })
    type!: CUSTOMER_TYPE

    @OneToMany(() => Order, (order) => order.customer)
    orders!: Order[]
}
