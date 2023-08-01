import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import Product from './product.entity'
import Division from './division.entity'
import I18NText from './abstract/i18n-text.entity'

@Entity()
export default abstract class Subdivision implements Workspace.Entity.Subdivision {
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column(() => I18NText)
    name!: I18NText

    @ManyToOne(() => Division, (division) => division.subdivisions)
    division!: Division

    @ManyToMany(() => Product, (product) => product.subdivisions)
    products?: Product[]
}
