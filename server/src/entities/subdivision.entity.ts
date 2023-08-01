import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import Division from './division.entity'
import { I18NText } from './abstract'
import Product from './product.entity'
import { Interfaces } from '@packages/index'

@Entity()
export default abstract class Subdivision implements Interfaces.Entity.Subdivision {
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column(() => I18NText)
    name!: I18NText

    @ManyToOne(() => Division, (division) => division.subdivisions)
    division!: Division

    @ManyToMany(() => Product, (product) => product.subdivisions)
    products?: Product[]
}
