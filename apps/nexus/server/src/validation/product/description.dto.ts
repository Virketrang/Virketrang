import { IsDefined, IsNotEmptyObject, IsObject, ValidateNested } from 'class-validator'

import I18NTextDTO from '../i18n/text.dto'
import { Transform } from 'class-transformer'

export default abstract class DescriptionDTO implements Workspace.Entity.Description {
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
