import { Transform } from 'class-transformer'
import { IsString } from 'class-validator'

import { Interfaces } from '@/types'

export default abstract class I18NTextDTO implements Interfaces.I18N.Text {
    @Transform(({ value }) => {
        console.log(value)
        return value
    })
    @IsString()
    'en-GB'!: string

    @IsString()
    'da-DK'!: string
}