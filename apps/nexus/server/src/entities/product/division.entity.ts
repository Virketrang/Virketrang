import { Column, Entity, OneToMany } from 'typeorm'

import { PRODUCT_CATEGORY } from '@/enums/index'

import I18NText from '../abstract/i18n-text.entity'
import Subdivision from './subdivision.entity'
import BaseEntity from '../abstract/base-entity'

@Entity()
export default class Division extends BaseEntity implements Workspace.Entity.Division {
    @Column(() => I18NText)
    name!: I18NText

    @OneToMany(() => Subdivision, (subdivision) => subdivision.division, { nullable: true })
    subdivisions?: Subdivision[]

    @Column({ type: 'enum', enum: PRODUCT_CATEGORY, array: true })
    categories!: PRODUCT_CATEGORY[]
}
