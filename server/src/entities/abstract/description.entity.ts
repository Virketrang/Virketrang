import { Column } from 'typeorm'
import I18NText from './i18n-text.entity'

export default abstract class Description {
    @Column(() => I18NText)
    short!: I18NText

    @Column(() => I18NText)
    long!: I18NText
}
