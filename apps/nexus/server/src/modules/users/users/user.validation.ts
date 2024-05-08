import PersonValidation from '../../../common/validation/person'
import BankAccountValidation from '../../shared/bank-accounts/bank-account.validation'
import ContactInfoValidation from '../../shared/contact-infos/contact-info.validation'
import ProfileValidation from '../../shared/profiles/profile.validation'

const CreateUserSchema = PersonValidation.create.extend({
    email: z.string(),
    password: z.string(),
    bank_account: BankAccountValidation.create,
    profile: ProfileValidation.create,
    contact_info: ContactInfoValidation.create
}) satisfies z.ZodType<Entity.User.Create>

export default abstract class UserValidation {
    public static create = CreateUserSchema
}
