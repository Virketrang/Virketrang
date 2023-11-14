import { Entity } from 'typeorm'
import BaseEntity from '../abstract/base-entity'

@Entity()
export default abstract class FixedAssetRegister extends BaseEntity implements Workspace.Entity.FixedAssetRegister {}
