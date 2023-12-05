import I18nSchema from '../i18n'
import ImageSchema from '../image'
import MeasurementSchema from '../measurement'

const CreateProductDescriptionSchema = z.object({
    short_description: I18nSchema.text.create,
    long_description: I18nSchema.text.create
}) satisfies z.ZodType<Entity.Description>

const CreateProductSchema = z.object({
    name: I18nSchema.text.create,
    description: CreateProductDescriptionSchema,
    retail_price: z.coerce.number(),
    cost_price: z.coerce.number(),
    delivery_time: z.coerce.number(),
    stock: z.coerce.number(),
    available: z.coerce.boolean(),
    materials: z.array(z.string()),
    measurement: MeasurementSchema.create,
    designer: z.string(),
    quantity: z.coerce.number(),
    images: z.array(ImageSchema.create)
}) satisfies z.ZodType<Entity.Product.Create>

export default abstract class ProductSchema {
    public static create = CreateProductSchema
}
