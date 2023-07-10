import { Entity, OneToMany, PrimaryKey, Collection, Enum, Embedded } from '@mikro-orm/core'

import { PRODUCT_CATEGORY } from '@packages/enums'

import Subdivision from './subdivision.entity'
import { I18NText } from './abstract'

@Entity()
export default abstract class Division {
    @PrimaryKey({ type: 'uuid', defaultRaw: 'uuid_generate_v4()' })
    id!: string

    @Embedded(() => I18NText)
    name!: I18NText

    @OneToMany({ entity: () => Subdivision, mappedBy: 'division', orphanRemoval: true, nullable: true })
    subdivisions = new Collection<Subdivision>(this)

    @Enum({ items: () => PRODUCT_CATEGORY, array: true })
    categories!: PRODUCT_CATEGORY[]
}
