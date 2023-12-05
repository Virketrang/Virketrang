const CreateLocaleSchema = z.object({
    language_id: z.string().uuid(),
    currency_id: z.string().uuid()
}) satisfies z.ZodType<Entity.Locale.Create>

export default abstract class LocaleValidation {
    public static create = CreateLocaleSchema
}
