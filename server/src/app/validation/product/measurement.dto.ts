import { IsNumber, IsString } from 'class-validator'

export default abstract class MeasurementDTO {
    @IsString()
    unit!: string

    @IsNumber()
    value!: number
}
