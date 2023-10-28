import { Column, Entity, ManyToMany, ManyToOne } from 'typeorm'

import Product from './product.entity'
import Division from './division.entity'
import I18NText from '../abstract/i18n-text.entity'
import BaseEntity from '../abstract/base-entity'

@Entity()
export default abstract class Subdivision extends BaseEntity implements Workspace.Entity.Subdivision {
    @Column(() => I18NText)
    name!: I18NText

    @ManyToOne(() => Division, (division) => division.subdivisions)
    division!: Division

    @ManyToMany(() => Product, (product) => product.subdivisions)
    products?: Product[]
}
