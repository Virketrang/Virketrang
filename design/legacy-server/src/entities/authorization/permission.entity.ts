import { Column, Entity, ManyToOne } from 'typeorm'
import BaseEntity from '../abstract/base-entity'
import Authorization from '../../modules/authentication/classes/authorization'
import Role from './role.entity'

@Entity()
export default class Permission extends BaseEntity implements Workspace.Entity.Permission {
    @Column({ type: 'enum', enum: Authorization.Permission })
    name!: typeof Authorization.Permission

    @Column({ type: 'enum', enum: Authorization.Action, array: true })
    action!: typeof Authorization.Action

    @ManyToOne(() => Role, (role) => role.permissions)
    role!: Role
}
