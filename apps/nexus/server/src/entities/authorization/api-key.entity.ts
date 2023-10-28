import { Column, Entity, OneToMany } from 'typeorm'
import BaseEntity from '../abstract/base-entity'
import Permission from './permission.entity'

@Entity()
export default class ApiKey extends BaseEntity implements Workspace.Entity.ApiKey {
    @Column()
    name!: string

    @Column()
    key!: string

    @OneToMany(() => Permission, (permission) => permission.role)
    permissions!: Permission[]
}
