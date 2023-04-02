import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import Customer from './customer.entity';

@Entity()
export default abstract class Order {
    @PrimaryKey({ type: 'uuid', defaultRaw: 'uuid_generate_v4()' })
    id!: string;

    @Property()
    completed!: boolean;

    @ManyToOne({ entity: () => Customer })
    customer!: Customer;
}
