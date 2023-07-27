import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import Product from './product.entity'

@Entity()
export default class Image {
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column()
    alt!: string

    @Column()
    width!: number

    @Column()
    height!: number

    @Column()
    url!: string

    @ManyToOne(() => Product, (product) => product.images)
    product!: Product
}
