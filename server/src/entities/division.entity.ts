import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Enums, Interfaces } from '@packages/index'

import Subdivision from './subdivision.entity'
import { I18NText } from './abstract'

@Entity()
export default abstract class Division implements Interfaces.Entity.Division {
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column(() => I18NText)
    name!: I18NText

    @OneToMany(() => Subdivision, (subdivision) => subdivision.division, { nullable: true })
    subdivisions?: Subdivision[]

    @Column({ type: 'enum', enum: Enums.PRODUCT_CATEGORY, array: true })
    categories!: Enums.PRODUCT_CATEGORY[]
}
