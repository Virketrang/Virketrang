const CreateI18nTextSchema = z.object({
    'da-DK': z.string(),
    'en-GB': z.string()
}) satisfies z.ZodType<I18N.Text>

export default abstract class I18nSchema {
    public static text = class Text {
        public static create = CreateI18nTextSchema
    }
}
