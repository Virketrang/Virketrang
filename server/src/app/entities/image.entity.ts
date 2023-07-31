import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import Product from './product.entity'
import { I18NText } from './abstract'
import { Interfaces } from '@packages/index'

@Entity()
export default class Image implements Interfaces.Entity.Image {
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column()
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
