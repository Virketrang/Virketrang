import { Interfaces } from '@packages/index'
import { IsNumber, IsString } from 'class-validator'

export default abstract class MeasurementDTO implements Interfaces.Entity.Measurement {
    @IsString()
    unit!: string

    @IsNumber()
    value!: number
}
