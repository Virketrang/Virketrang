import { Column } from 'typeorm'


export default abstract class I18NText {
    @Column(() => String)
    'en-GB'!: string

    @Column(() => String)
    'da-DK'!: string
}
