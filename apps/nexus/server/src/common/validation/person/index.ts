import ContactInfoValidation from '../../../modules/shared/contact-infos/contact-info.validation'
import ProfileValidation from '../../../modules/shared/profiles/profile.validation'

const CreatePersonSchema = z.object({
    profile: ProfileValidation.create,
    contact_info: ContactInfoValidation.create
}) satisfies z.ZodType<Entity.Person.Create>

export default abstract class PersonValidation {
    public static create = CreatePersonSchema
}
