import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import Division from './division.entity'
import { I18NText } from './abstract'
import Product from './product.entity'

@Entity()
export default abstract class Subdivision {
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column(() => I18NText)
    name!: I18NText

    @ManyToOne(() => Division, (division) => division.subdivisions)
    division!: Division

    @ManyToMany(() => Product, (product) => product.subdivisions)
    products?: Product[]
}
