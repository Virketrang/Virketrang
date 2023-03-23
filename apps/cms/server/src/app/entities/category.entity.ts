import { Entity, OneToMany, PrimaryKey, Property, Collection } from '@mikro-orm/core';
import Product from './product.entity';

@Entity()
export default abstract class Category {
    @PrimaryKey({ type: 'uuid', defaultRaw: 'uuid_generate_v4()' })
    id!: string;

    @Property()
    name!: string;

    @OneToMany({ entity: () => Product, mappedBy: 'category', orphanRemoval: true, eager: true })
    product = new Collection<Product>(this);
}
