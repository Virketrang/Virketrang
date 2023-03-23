import { Embedded, Entity, OneToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Person } from './abstract';
import Address from './address.entity';
import Bank from './bank.entity';

@Entity()
export default abstract class Employee extends Person {
    @PrimaryKey({ type: 'uuid', defaultRaw: 'uuid_generate_v4()' })
    id!: string;

    @Property()
    cpr!: number;

    @Property()
    hourlyPay!: number;

    @Property()
    active!: boolean;

    @Property()
    position!: string;

    @OneToOne({ mappedBy: 'employee' })
    bank!: Bank;
}
