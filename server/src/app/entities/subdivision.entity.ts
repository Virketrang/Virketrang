import { Entity, PrimaryKey, ManyToOne, Embedded, ManyToMany, Collection } from '@mikro-orm/core'
import Division from './division.entity'
import { I18NText } from './abstract'
import Product from './product.entity'

@Entity()
export default abstract class Subdivision {
    @PrimaryKey({ type: 'uuid', defaultRaw: 'uuid_generate_v4()' })
    id!: string

    @Embedded(() => I18NText)
    name!: I18NText

    @ManyToOne({ entity: () => Division })
    division!: Division

    @ManyToMany({ entity: () => Product, nullable: true })
    products?: Collection<Product> = new Collection<Product>(this)
}
