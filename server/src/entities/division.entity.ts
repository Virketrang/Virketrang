import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

import { PRODUCT_CATEGORY } from '../../../packages/enums'

import I18NText from './abstract/i18n-text.entity'
import Subdivision from './subdivision.entity'

@Entity()
export default class Division implements Workspace.Entity.Division {
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column(() => I18NText)
    name!: I18NText

    @OneToMany(() => Subdivision, (subdivision) => subdivision.division, { nullable: true })
    subdivisions?: Subdivision[]

    @Column({ type: 'enum', enum: PRODUCT_CATEGORY, array: true })
    categories!: PRODUCT_CATEGORY[]
}
