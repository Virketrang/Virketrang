import { Entity, Enum, OneToMany, PrimaryKey } from '@mikro-orm/core';

import { CustomerType } from '@packages/enums';

import { Person } from './abstract';
import Order from './order.entity';

@Entity()
export default abstract class Customer extends Person {
    @PrimaryKey({ type: 'uuid', defaultRaw: 'uuid_generate_v4()' })
    id!: string;

    @Enum(() => CustomerType)
    type!: CustomerType;
}
