import { Entity, OneToOne, PrimaryKeyType, Property } from '@mikro-orm/core';
import Employee from './employee.entity';

@Entity({})
export default abstract class Bank {
    @OneToOne({ entity: () => Employee, inversedBy: 'bank', primary: true, orphanRemoval: true })
    employee!: number;

    @Property()
    registrationNumber!: number;

    @Property()
    accountNumber!: number;

    @Property()
    swift!: string;

    @Property()
    iban!: string;
}
