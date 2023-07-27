import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Person } from './abstract'
import Bank from './abstract/bank.entity'

@Entity()
export default abstract class Employee extends Person {
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column()
    cpr!: number

    @Column()
    hourlyPay!: number

    @Column()
    active!: boolean

    @Column()
    position!: string

    @Column(() => Bank)
    bank!: Bank
}
