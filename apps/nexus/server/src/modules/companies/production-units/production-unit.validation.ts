import AddressValidation from '../../shared/addresses/address.validation'

const CreateProductionUnitSchema = z.object({
    unit_number: z.coerce.number(),
    primary_location: z.coerce.boolean(),
    address: AddressValidation.create
}) satisfies z.ZodType<Entity.ProductionUnit.Create>

export default abstract class ProductionUnitValidation {
    public static create = CreateProductionUnitSchema
}
