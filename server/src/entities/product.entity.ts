import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

import { PRODUCT_CATEGORY } from '@/enums/index'

import I18NText from './abstract/i18n-text.entity'
import Description from './abstract/description.entity'
import Measurement from './abstract/measurement.entity'
import Image from './image.entity'
import Subdivision from './subdivision.entity'

@Entity()
export default class Product implements Workspace.Entity.Product {
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column(() => I18NText)
    name!: I18NText

    @Column(() => Description)
    description!: Description

    @Column()
    retailPrice!: number

    @Column()
    costPrice!: number

    @Column()
    deliveryTime!: number

    @Column({ default: 0 })
    stock!: number

    @Column({ default: true })
    available!: boolean

    @Column(() => String, { array: true })
    materials!: string[]

    @Column({ type: 'enum', enum: PRODUCT_CATEGORY })
    category!: PRODUCT_CATEGORY

    @Column()
    createdAt?: Date = new Date()

    @Column(() => Measurement)
    measurement!: Measurement

    @Column()
    designer!: string

    @OneToMany(() => Image, (image) => image.product)
    images!: Image[]

    @ManyToMany(() => Subdivision, (subdivision) => subdivision.products, { nullable: true })
    subdivisions?: Subdivision[]
}
