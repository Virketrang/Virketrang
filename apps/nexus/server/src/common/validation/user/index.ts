import PersonSchema from '../person'
import BankAccountSchema from '../bank-account'
import ProfileSchema from '../profile'
import ContactInfoSchema from '../contact-info'

const CreateUserSchema = PersonSchema.create.extend({
    email: z.string(),
    password: z.string(),
    bank_account: BankAccountSchema.create,
    profile: ProfileSchema.create,
    contact_info: ContactInfoSchema.create
}) satisfies z.ZodType<Entity.User.Create>

export default abstract class UserSchema {
    public static create = CreateUserSchema
}
