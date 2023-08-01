import { IsNumber, IsString } from 'class-validator'

export default abstract class MeasurementDTO implements Workspace.Entity.Measurement {
    @IsString()
    unit!: string

    @IsNumber()
    value!: number
}
