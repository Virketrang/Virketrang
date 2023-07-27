import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { PRODUCT_CATEGORY } from '@packages/enums'

import Subdivision from './subdivision.entity'
import { I18NText } from './abstract'

@Entity()
export default abstract class Division {
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column(() => I18NText)
    name!: I18NText

    @OneToMany(() => Subdivision, (subdivision) => subdivision.division, { nullable: true })
    subdivisions?: Subdivision[]

    @Column({ type: 'enum', enum: PRODUCT_CATEGORY, array: true })
    categories!: PRODUCT_CATEGORY[]
}
