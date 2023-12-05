import ProfileSchema from '../profile'
import ContactInfoSchema from '../contact-info'

const CreatePersonSchema = z.object({
    profile: ProfileSchema.create,
    contact_info: ContactInfoSchema.create
}) satisfies z.ZodType<Entity.Person.Create>

export default abstract class PersonSchema {
    public static create = CreatePersonSchema
}
