import { Column, Entity, ManyToOne } from 'typeorm'
import Company from '../company.entity'
import BaseEntity from '../abstract/base-entity'

@Entity()
export default class VatCode extends BaseEntity implements Workspace.Entity.VatCode {
    @Column()
    name!: string

    @Column()
    rate!: number

    @ManyToOne(() => Company, (company) => company.vatCodes)
    company!: Company
}
