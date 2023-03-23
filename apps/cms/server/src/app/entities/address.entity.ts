import { Embeddable, Property } from '@mikro-orm/core';

@Embeddable()
export default abstract class Address {
    @Property()
    streetName!: string;

    @Property()
    streetNumber!: string;

    @Property()
    floor!: string;

    @Property()
    postalCode!: number;

    @Property()
    city!: string;

    @Property()
    country!: string;
}
