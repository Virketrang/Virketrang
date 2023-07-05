import { Property, PrimaryKey, OneToMany, Entity, Collection, ManyToOne, Rel, Enum, Embedded } from '@mikro-orm/core'

import { PRODUCT_CATEGORY } from '@packages/enums'

import { Description, Measurement, Image, Category } from '.'

@Entity()
export default class Product {
    @PrimaryKey({ type: 'uuid', defaultRaw: 'uuid_generate_v4()' })
    id!: string

    @Property()
    name!: string

    @Embedded(() => Description)
    description!: Description

    @Property()
    retailPrice!: number

    @Property()
    costPrice!: number

    @Property({ default: 0 })
    stock!: number

    @Property({ default: true })
    available!: boolean

    @Property()
    materials!: string[]

    @Enum(() => PRODUCT_CATEGORY)
    category!: PRODUCT_CATEGORY

    @Property()
    createdAt?: Date = new Date()

    @Embedded(() => Measurement)
    measurement!: Measurement

    @Property()
    deliveryTime!: number

    @Property()
    profit() {
        return this.retailPrice - this.costPrice
    }

    @OneToMany({ entity: () => Image, mappedBy: 'product', orphanRemoval: true, eager: true })
    images = new Collection<Image>(this)

    // @ManyToOne({ entity: () => Category })
    // category!: Rel<Product>
}
