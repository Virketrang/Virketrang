import I18nValidation from '../../../common/validation/i18n'

const CreateImageSchema = z.object({
    alt: I18nValidation.text.create,
    width: z.coerce.number(),
    height: z.coerce.number(),
    url: z.string(),
    file_name: z.string(),
    owner_id: z.string(),
    buffer: z.any(),
    relation: z.union([z.literal('product'), z.literal('content')])
})

export default abstract class ImageValidation {
    public static create = CreateImageSchema
}
