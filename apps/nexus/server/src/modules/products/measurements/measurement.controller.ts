import MeasurementValidation from './measurement.validation'

@Controller('/measurements')
export default abstract class ProductionUnit {
    public static readonly router = new Hono()
    public static readonly validation = MeasurementValidation
}
