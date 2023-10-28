import { Column } from 'typeorm'

export default abstract class Address implements Workspace.Entity.Address {
    @Column()
    streetName!: string

    @Column()
    streetNumber!: string

    @Column({ nullable: true })
    floor!: string

    @Column()
    postalCode!: number

    @Column()
    city!: string

    @Column()
    country!: string
}
