import { Column, VirtualColumn } from 'typeorm'

import Address from './address.entity'
import BaseEntity from './base-entity'
import PhoneNumber from './phone-number.entity'

export default abstract class Person extends BaseEntity implements Workspace.Entity.Person {
    @Column()
    firstname!: string

    @Column()
    lastname!: string

    @VirtualColumn({ query: (alias) => `SELECT CONCAT("firstname", "lastname") FROM "users" WHERE "id" = ${alias}.id` })
    name!: string

    @Column()
    email!: string

    @Column(() => Address)
    address!: Address

    @Column(() => PhoneNumber)
    phone!: PhoneNumber
}
