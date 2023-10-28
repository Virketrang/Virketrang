import {
    IsArray,
    IsBoolean,
    IsDefined,
    IsEnum,
    IsInt,
    IsNotEmptyObject,
    IsNumber,
    IsObject,
    IsString
} from 'class-validator'
import { Transform, Type } from 'class-transformer'

import { toBoolean, toNumber } from '@/nexus/server/utils'
import { PRODUCT_CATEGORY } from '@/enums/index'

import * as I18N from '@/nexus/server/validation/i18n'
import Measurement from './measurement.dto'
import Description from './description.dto'

export default abstract class CreateProduct implements Workspace.Entity.Product.Create {
    @Transform(({ value }) => JSON.parse(value))
    @IsDefined({ message: 'Produktet skal have et navn' })
    @IsNotEmptyObject()
    @IsObject({ message: 'Produktet skal have et navn på alle sprog' })
    @Type(() => I18N.Text)
    name!: I18N.Text

    @Transform(({ value }) => JSON.parse(value))
    @IsDefined({ message: 'Produktet skal have en beskrivelse' })
    @IsNotEmptyObject()
    @IsObject({ message: 'Produktet skal have en beskrivelse på flere sprog' })
    @Type(() => Description)
    description!: Description

    @Transform(({ value }) => toNumber(value))
    @IsNumber({ allowNaN: false, allowInfinity: false, maxDecimalPlaces: 2 })
    retailPrice!: number

    @Transform(({ value }) => toNumber(value))
    @IsNumber({ allowNaN: false, allowInfinity: false, maxDecimalPlaces: 2 })
    costPrice!: number

    @Transform(({ value }) => toNumber(value))
    @IsInt({ message: 'Lagerbeholdning må angives som et heltal' })
    stock!: number

    @Transform(({ value }) => toNumber(value))
    @IsInt({ message: 'Leveringstiden skal angives i hele antal dage' })
    deliveryTime!: number

    @Transform(({ value }) => toBoolean(value))
    @IsBoolean({ message: 'Det skal angives, hvorvidt produktet er tilgængeligt' })
    available!: boolean

    @Transform(({ value }) => JSON.parse(value))
    @IsArray({ message: 'Materialer skal være en Array' })
    @IsString({ each: true, message: 'Materialer skal være af typen: String' })
    materials!: string[]

    @IsEnum(PRODUCT_CATEGORY, { message: 'Ugyldig produktkategori angivet' })
    category!: PRODUCT_CATEGORY

    @IsString({ message: 'Der skal angives en designer og angivelsen skal være en String' })
    designer!: string

    @Transform(({ value }) => JSON.parse(value))
    @IsDefined()
    @IsNotEmptyObject()
    @IsObject()
    @Type(() => Measurement)
    measurement!: Measurement
}
