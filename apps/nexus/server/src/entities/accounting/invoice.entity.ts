import { Entity } from 'typeorm'
import BaseEntity from '../abstract/base-entity'

@Entity()
export default abstract class Invoice extends BaseEntity implements Workspace.Entity.Invoice {}
