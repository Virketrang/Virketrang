import { Entity, Enum, PrimaryKey } from '@mikro-orm/core';
import { CustomerType } from '@packages/enums';
import { Person } from './abstract';

@Entity()
export default abstract class Customer extends Person {
    @PrimaryKey({ type: 'uuid', defaultRaw: 'uuid_generate_v4()' })
    id!: string;

    @Enum(() => CustomerType)
    type!: CustomerType;
}
