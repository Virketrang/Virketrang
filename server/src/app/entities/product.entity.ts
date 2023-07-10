import { Property, PrimaryKey, OneToMany, Entity, Collection, Enum, Embedded, ManyToMany } from '@mikro-orm/core'

import { PRODUCT_CATEGORY } from '@packages/enums'

import { Description, Measurement, Image, Subdivision, I18NText } from '.'

@Entity()
export default class Product {
    @PrimaryKey({ type: 'uuid', defaultRaw: 'uuid_generate_v4()' })
    id!: string

    @Embedded(() => I18NText)
    name!: I18NText

    @Embedded(() => Description)
    description!: Description

    @Property()
    retailPrice!: number

    @Property()
    costPrice!: number

    @Property()
    deliveryTime!: number

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
    designer!: string

    @Property()
    profit() {
        return this.retailPrice - this.costPrice
    }

    @OneToMany({ entity: () => Image, mappedBy: 'product', orphanRemoval: true, eager: true })
    images = new Collection<Image>(this)

    @ManyToMany({ entity: () => Subdivision, nullable: true })
    subdivisions?: Collection<Subdivision> = new Collection<Subdivision>(this)
}
