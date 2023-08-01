import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import Customer from './customer.entity'

@Entity()
export default class Order {
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column()
    completed!: boolean

    @ManyToOne(() => Customer, (customer) => customer.orders)
    customer!: Customer
}
