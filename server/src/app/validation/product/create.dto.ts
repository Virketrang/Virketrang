import {
    IsArray,
    IsBoolean,
    IsDefined,
    IsEnum,
    IsInt,
    IsNotEmptyObject,
    IsNumber,
    IsObject,
    IsString,
    isInt
} from 'class-validator'
import { Transform, Type } from 'class-transformer'

import { toBoolean, toNumber } from '@/app/utils'
import * as Validation from '../index'
import { PRODUCT_CATEGORY } from '@packages/index'

export default abstract class CreateProduct {
    @Transform(({ value }) => JSON.parse(value))
    @IsDefined({ message: 'Produktet skal have et navn' })
    @IsNotEmptyObject()
    @IsObject({ message: 'Produktet skal have et navn på alle sprog' })
    @Type(() => Validation.I18N.Text)
    name!: Validation.I18N.Text

    @Transform(({ value }) => JSON.parse(value))
    @IsDefined({ message: 'Produktet skal have en beskrivelse' })
    @IsNotEmptyObject()
    @IsObject({ message: 'Produktet skal have en beskrivelse på flere sprog' })
    @Type(() => Validation.Product.Description)
    description!: Validation.Product.Description

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
    @Type(() => Validation.Product.Measurement)
    measurement!: Validation.Product.Measurement
}
