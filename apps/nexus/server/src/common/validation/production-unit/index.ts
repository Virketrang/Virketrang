import AddressSchema from '../address'

const CreateProductionUnitSchema = z.object({
    unit_number: z.coerce.number(),
    primary_location: z.coerce.boolean(),
    address: AddressSchema.create
}) satisfies z.ZodType<Entity.ProductionUnit.Create>

export default abstract class ProductionUnitSchema {
    public static create = CreateProductionUnitSchema
}
