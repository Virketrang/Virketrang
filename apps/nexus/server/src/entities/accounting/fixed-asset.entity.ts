import { Column, Entity } from 'typeorm'

import Enum from '@/enums/index'

import BaseEntity from '../abstract/base-entity'

@Entity()
export default abstract class FixedAsset extends BaseEntity implements Workspace.Entity.FixedAsset {
    @Column()
    name!: string

    @Column({ type: 'enum', enum: Enum.FIXED_ASSET_TYPE })
    type!: Workspace.Enum.FIXED_ASSET_TYPE
}
