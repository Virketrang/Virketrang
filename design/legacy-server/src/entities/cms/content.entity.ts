import { Column, Entity, ManyToOne } from 'typeorm'
import BaseEntity from '../abstract/base-entity'
import ContentType from './content-type.entity'

@Entity()
export default class Content extends BaseEntity implements Workspace.Entity.Content {
    @ManyToOne(() => ContentType, (contentType) => contentType.contents)
    contentType!: ContentType

    @Column({ type: 'jsonb' })
    value!: object

    @Column({ default: false })
    published!: boolean
}
