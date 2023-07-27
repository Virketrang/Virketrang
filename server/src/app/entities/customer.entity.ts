import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { CustomerType } from '@packages/enums'

import { Person } from './abstract'
import Order from './order.entity'

@Entity()
export default abstract class Customer extends Person {
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column({ type: 'enum', enum: CustomerType })
    type!: CustomerType

    @OneToMany(() => Order, (order) => order.customer)
    orders!: Order[]
}
