import { Entity, PrimaryKey } from '@mikro-orm/core'

@Entity()
export default class Record {
    @PrimaryKey({ type: 'uuid', defaultRaw: 'uuid_generate_v4()' })
    public id!: string
}
