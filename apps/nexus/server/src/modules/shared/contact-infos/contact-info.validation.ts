import AddressValidation from '../addresses/address.validation'
import PhoneNumberValidation from '../phone-numbers/phone-number.validation'

const CreateSchema = z.object({
    address: AddressValidation.create,
    phone_number: PhoneNumberValidation.create
}) satisfies z.ZodType<Entity.ContactInfo.Create>

export default abstract class ContactInfoValidation {
    public static create = CreateSchema
}
