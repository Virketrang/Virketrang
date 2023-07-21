import { Transform, Type } from 'class-transformer'
import { IsArray, IsDefined, IsEnum, IsNotEmptyObject, IsObject } from 'class-validator'

import * as Validation from '../index'
import { PRODUCT_CATEGORY } from '@packages/index'

export default abstract class Divisions {
    @IsDefined({ message: 'Inddelingen skal have et navn' })
    @IsNotEmptyObject()
    @IsObject({ message: 'Inddelingen skal have et navn på alle sprog' })
    @Type(() => Validation.I18N.Text)
    name!: Validation.I18N.Text

    @IsArray()
    @IsEnum(PRODUCT_CATEGORY, { each: true, message: 'Der er ikke angivet en korrekt værdi' })
    categories!: PRODUCT_CATEGORY[]
}
