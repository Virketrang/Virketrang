import { IsString } from 'class-validator'

export default abstract class I18NTextDTO {
    @IsString()
    'en-GB'!: string

    @IsString()
    'da-DK'!: string
}
