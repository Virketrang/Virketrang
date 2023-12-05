const CreateAddressSchema = z.object({
    street_name: z.string(),
    street_number: z.coerce.number(),
    apartment: z.string().optional(),
    postal_code: z.coerce.number(),
    city: z.string(),
    country: z.string()
}) satisfies z.ZodType<Entity.Address.Create>

export default abstract class AddressSchema {
    public static create = CreateAddressSchema
}
