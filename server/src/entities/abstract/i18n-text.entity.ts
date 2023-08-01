import { Column } from 'typeorm'

export default abstract class I18NText implements Workspace.I18N.Text {
    @Column()
    'en-GB'!: string

    @Column()
    'da-DK'!: string
}
