import { Column } from 'typeorm'

export default abstract class Bank implements Workspace.Entity.Bank {
    @Column()
    registrationNumber!: number

    @Column()
    accountNumber!: number

    @Column({ nullable: true })
    swift!: string

    @Column({ nullable: true })
    iban!: string
}
