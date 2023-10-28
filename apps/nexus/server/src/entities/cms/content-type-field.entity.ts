import { Column, Entity, ManyToOne } from 'typeorm'
import BaseEntity from '../abstract/base-entity'
import ContentType from './content-type.entity'

@Entity()
export default class ContentTypeField extends BaseEntity implements Workspace.Entity.ContentTypeField {
    @Column()
    name!: string

    @Column()
    type!: string

    @ManyToOne(() => ContentType, (contentType) => contentType.fields)
    contentType!: ContentType
}
