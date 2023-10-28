import { Column, Entity, ManyToOne } from 'typeorm'

import Product from './product/product.entity'
import I18NText from './abstract/i18n-text.entity'
import BaseEntity from './abstract/base-entity'

@Entity()
export default class Image extends BaseEntity implements Workspace.Entity.Image {
    @Column(() => I18NText)
    alt!: I18NText

    @Column()
    width!: number

    @Column()
    height!: number

    @Column()
    url!: string

    @ManyToOne(() => Product, (product) => product.images)
    product!: Product
}
