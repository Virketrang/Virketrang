import { Entity } from 'typeorm'
import BaseEntity from '../abstract/base-entity'

@Entity()
export default abstract class FixedAssetGroup extends BaseEntity implements Workspace.Entity.FixedAssetGroup {}
