import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

import Bank from './abstract/bank.entity'
import Person from './abstract/person.entity'

@Entity()
export default class Employee extends Person {
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
