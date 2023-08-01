import { Column } from 'typeorm'

export default abstract class Bank {
    @Column()
    registrationNumber!: number

    @Column()
    accountNumber!: number

    @Column()
    swift!: string

    @Column()
    iban!: string
}
