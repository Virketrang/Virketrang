import { Type } from 'class-transformer'
import { IsArray, IsDefined, IsEnum, IsNotEmptyObject, IsObject } from 'class-validator'

import { PRODUCT_CATEGORY } from '../../../../packages/enums'

import * as I18N from '@/server/validation/i18n'

export default abstract class Divisions implements Workspace.Entity.Division.Create {
    @IsDefined({ message: 'Inddelingen skal have et navn' })
    @IsNotEmptyObject()
    @IsObject({ message: 'Inddelingen skal have et navn på alle sprog' })
    @Type(() => I18N.Text)
    name!: I18N.Text

    @IsArray()
    @IsEnum(PRODUCT_CATEGORY, { each: true, message: 'Der er ikke angivet en korrekt værdi' })
    categories!: PRODUCT_CATEGORY[]
}
