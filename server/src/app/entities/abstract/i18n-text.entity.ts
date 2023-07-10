import { Embeddable, Property } from '@mikro-orm/core'

@Embeddable()
export default abstract class I18NText {
    @Property()
    'en-GB'!: string

    @Property()
    'da-DK'!: string
}
