import { Entity } from 'typeorm'
import BaseEntity from '../abstract/base-entity'

@Entity()
export default abstract class CreditNote extends BaseEntity implements Workspace.Entity.CreditNote {}
