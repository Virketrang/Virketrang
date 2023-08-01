import { Column } from 'typeorm'

export default abstract class Address {
    @Column()
    streetName!: string

    @Column()
    streetNumber!: string

    @Column()
    floor!: string

    @Column()
    postalCode!: number

    @Column()
    city!: string

    @Column()
    country!: string
}
