import { Embeddable, Property } from '@mikro-orm/core'

@Embeddable()
export default abstract class Description {
    @Property({ type: 'text' })
    short!: string

    @Property({ type: 'longtext' })
    long!: string
}
