import { IsDefined, IsNotEmptyObject, IsObject, ValidateNested } from 'class-validator'

import I18NTextDTO from '../../validation/i18n/text.dto'
import { Transform } from 'class-transformer'
import { Interfaces } from '@/types/index'

export default abstract class DescriptionDTO implements Interfaces.Entity.Description {
    @Transform(({ value }) => {
        console.log(value)
        return value
    })
    @IsDefined()
    @IsNotEmptyObject()
    @IsObject()
    @ValidateNested()
    short!: I18NTextDTO

    @Transform(({ value }) => {
        console.log(value)
        return value
    })
    @IsDefined()
    @IsNotEmptyObject()
    @IsObject()
    @ValidateNested()
    long!: I18NTextDTO
}
