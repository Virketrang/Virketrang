import AddressSchema from '../address'
import PhoneNumberSchema from '../phone-number'

const CreateSchema = z.object({
    address: AddressSchema.create,
    phone_number: PhoneNumberSchema.create
}) satisfies z.ZodType<Entity.ContactInfo.Create>

export default abstract class ContactInfoSchema {
    public static create = CreateSchema
}
