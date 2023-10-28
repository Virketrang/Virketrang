import { Column, Entity, ManyToOne, OneToMany } from 'typeorm'
import BaseEntity from '../abstract/base-entity'
import ContentTypeField from './content-type-field.entity'
import Content from './content.entity'
import Company from '../company.entity'

@Entity()
export default class ContentType extends BaseEntity implements Workspace.Entity.ContentType {
    @Column()
    name!: string

    @OneToMany(() => ContentTypeField, (field) => field.contentType)
    fields!: ContentTypeField[]

    @OneToMany(() => Content, (content) => content.contentType)
    contents!: Content[]

    @ManyToOne(() => Company, (company) => company.contentTypes)
    company!: Company
}
