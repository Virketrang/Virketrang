import { Embedded, Entity, Property } from '@mikro-orm/core';
import Address from '../address.entity';

@Entity({ abstract: true })
export default abstract class Person {
    @Property()
    firstname!: string;

    @Property()
    lastname!: string;

    @Property({ persist: false })
    get name(): string {
        return `${this.firstname} ${this.lastname}`;
    }

    @Property()
    email!: string;

    @Embedded(() => Address)
    address!: Address;
}
