import {
    IsArray,
    IsBoolean,
    IsDefined,
    IsEnum,
    IsNotEmptyObject,
    IsNumber,
    IsObject,
    IsString,
    ValidateNested
} from 'class-validator'

import I18NTextDTO from '@/app/utils/dto/i18n-text.dto'
import { Transform, Type } from 'class-transformer'
import { toBoolean, toNumber } from '@/app/utils'
import { PRODUCT_CATEGORY } from '@packages/index'
import MeasurementDTO from './measurement.dto'
import DescriptionDTO from './description.dto'

export default abstract class CreateProductDTO {
    @Transform(({ value }) => JSON.parse(value))
    @IsDefined()
    @IsNotEmptyObject()
    @IsObject()
    @ValidateNested()
    @Type(() => I18NTextDTO)
    name!: I18NTextDTO

    @Transform(({ value }) => JSON.parse(value))
    @IsDefined()
    @IsNotEmptyObject()
    @IsObject()
    @ValidateNested()
    @Type(() => DescriptionDTO)
    description!: DescriptionDTO

    @Transform(({ value }) => toNumber(value))
    @IsNumber()
    retailPrice!: number

    @Transform(({ value }) => toNumber(value))
    @IsNumber()
    costPrice!: number

    @Transform(({ value }) => toNumber(value))
    @IsNumber()
    stock!: number

    @Transform(({ value }) => toNumber(value))
    @IsNumber()
    deliveryTime!: number

    @Transform(({ value }) => toBoolean(value))
    @IsBoolean()
    available!: boolean

    @Transform(({ value }) => JSON.parse(value))
    @IsArray()
    @IsString({ each: true })
    materials!: string[]

    @IsEnum(PRODUCT_CATEGORY)
    category!: PRODUCT_CATEGORY

    @IsString()
    designer!: string

    @Transform(({ value }) => JSON.parse(value))
    @IsDefined()
    @IsNotEmptyObject()
    @IsObject()
    @ValidateNested()
    @Type(() => MeasurementDTO)
    measurement!: MeasurementDTO
}
