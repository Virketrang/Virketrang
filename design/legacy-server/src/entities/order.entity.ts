import { Column, Entity, ManyToOne } from 'typeorm'

import Customer from './customer.entity'
import BaseEntity from './abstract/base-entity'

@Entity()
export default class Order extends BaseEntity implements Workspace.Entity.Order {
    @Column()
    completed!: boolean

    @ManyToOne(() => Customer, (customer) => customer.orders)
    customer!: Customer
}
