import { Property, PrimaryKey, OneToMany, Entity, Collection, ManyToOne, Rel, Enum } from '@mikro-orm/core'

import { ProductType } from '@packages/enums'

import Category from './category.entity'
import Image from './image.entity'

@Entity()
export default class Product {
    @PrimaryKey({ type: 'uuid', defaultRaw: 'uuid_generate_v4()' })
    id!: string

    @Property()
    name!: string

    @Property()
    description!: String

    @Property()
    retailPrice!: number

    @Property()
    costPrice!: number

    @Property({ default: 0 })
    stock!: number

    @Property({ default: true })
    available!: boolean

    @Property()
    materials!: []

    @Enum(() => ProductType)
    type!: ProductType

    @Property()
    createdAt?: Date = new Date()

    @Property()
    profit() {
        return this.retailPrice - this.costPrice
    }

    @OneToMany({ entity: () => Image, mappedBy: 'product', orphanRemoval: true, eager: true })
    images = new Collection<Image>(this)

    @ManyToOne({ entity: () => Category })
    category!: Rel<Product>
}
