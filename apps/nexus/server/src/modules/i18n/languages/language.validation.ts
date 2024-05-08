const CreateLanguageSchema = z.object({
    language_name: z.string(),
    language_code: z.string()
}) satisfies z.ZodType<Entity.Language.Create>

export default abstract class LanguageValidation {
    public static create = CreateLanguageSchema
}
