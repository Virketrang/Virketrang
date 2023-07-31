import { Transform } from 'class-transformer'
import { IsNumber, IsOptional, IsEnum, IsString, IsBoolean, IsArray } from 'class-validator'

import { Enums } from '@packages/index'
import { toArray, toBoolean, toNumber } from '../../utils'

export default class ProductQueryParams {
    @Transform(({ value }) => toNumber(value, { min: 1, max: 100, default: 20 }))
    @IsNumber()
    @IsOptional()
    public limit!: number

    @IsEnum(Enums.PRODUCT_CATEGORY)
    @IsOptional()
    public category!: Enums.PRODUCT_CATEGORY

    @Transform(({ value }) => toNumber(value, { min: 1, max: 10000, default: 1 }))
    @IsNumber()
    @IsOptional()
    public minPrice!: number

    @Transform(({ value }) => toNumber(value, { min: 1, max: 10000, default: 10000 }))
    @IsNumber()
    @IsOptional()
    public maxPrice!: number

    @Transform(({ value }) => toBoolean(value))
    @IsBoolean()
    @IsOptional()
    public available!: boolean

    @Transform(({ value }) => toArray(value))
    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    public materials!: string[]

    @IsEnum(Enums.SORTING_OPTION)
    @IsOptional()
    public sort!: Enums.SORTING_OPTION
}
