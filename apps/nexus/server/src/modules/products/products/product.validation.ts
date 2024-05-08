import I18nValidation from '../../../common/validation/i18n'
import ImageValidation from '../../shared/images/image.validation'
import MeasurementValidation from '../measurements/measurement.validation'

const CreateProductDescriptionSchema = z.object({
    short_description: I18nValidation.text.create,
    long_description: I18nValidation.text.create
}) satisfies z.ZodType<Entity.Description>

const CreateProductSchema = z.object({
    name: I18nValidation.text.create,
    description: CreateProductDescriptionSchema,
    retail_price: z.coerce.number(),
    cost_price: z.coerce.number(),
    delivery_time: z.coerce.number(),
    stock: z.coerce.number(),
    available: z.coerce.boolean(),
    materials: z.array(z.string()),
    measurement: MeasurementValidation.create,
    designer: z.string(),
    quantity: z.coerce.number(),
    images: z.array(ImageValidation.create)
}) satisfies z.ZodType<Entity.Product.Create>

export default abstract class ProductValidation {
    public static create = CreateProductSchema
}
