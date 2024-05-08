const CreatePhoneNumberSchema = z.object({
    country_code: z.coerce.number(),
    subscriber_number: z.coerce.number()
}) satisfies z.ZodType<Entity.PhoneNumber.Create>

export default abstract class PhoneNumberValidation {
    public static create = CreatePhoneNumberSchema
}
