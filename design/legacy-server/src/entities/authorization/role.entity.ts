import { Column, Entity, ManyToOne } from 'typeorm'
import BaseEntity from '../abstract/base-entity'
import Permission from './permission.entity'

@Entity()
export default class Role extends BaseEntity implements Workspace.Entity.Role {
    @Column()
    name!: string

    @ManyToOne(() => Permission, (permission) => permission.role)
    permissions!: Permission[]
}
