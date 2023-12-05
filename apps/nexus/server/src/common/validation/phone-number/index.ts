const CreatePhoneNumberSchema = z.object({
    country_code: z.coerce.number(),
    subscriber_number: z.coerce.number()
}) satisfies z.ZodType<Entity.PhoneNumber.Create>

export default abstract class PhoneNumberSchema {
    public static create = CreatePhoneNumberSchema
}
