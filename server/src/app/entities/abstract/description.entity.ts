import { Embeddable, Embedded, Property } from '@mikro-orm/core'
import I18NText from './i18n-text.entity'

@Embeddable()
export default abstract class Description {
    @Embedded({ entity: () => I18NText, type: 'text' })
    short!: I18NText

    @Embedded({ entity: () => I18NText, type: 'longtext' })
    long!: I18NText
}
