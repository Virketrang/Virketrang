import { Column } from 'typeorm'

import Address from './address.entity'

export default abstract class Person {
    @Column()
    firstname!: string

    @Column()
    lastname!: string

    @Column()
    email!: string

    @Column(() => Address)
    address!: Address
}
