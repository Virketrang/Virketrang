import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import Product from './product.entity'
import I18NText from './abstract/i18n-text.entity'

@Entity()
export default class Image implements Workspace.Entity.Image {
    @PrimaryGeneratedColumn('uuid')
    id!: string

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
