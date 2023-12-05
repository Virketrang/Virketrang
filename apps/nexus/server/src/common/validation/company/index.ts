import PhoneNumberSchema from '../phone-number'
import AddressSchema from '../address'
import BankAccountSchema from '../bank-account'
import ProductionUnitSchema from '../production-unit'

const CreateCompanySchema = z.object({
    company_name: z.string(),
    company_number: z.coerce.number(),
    accounting_class: z.nativeEnum(Enum.ACCOUNTING_CLASS),
    corporate_form: z.nativeEnum(Enum.CORPORATE_FORM),
    employer: z.coerce.boolean(),
    phone_number: PhoneNumberSchema.create,
    address: AddressSchema.create,
    bank_account: BankAccountSchema.create,
    production_units: z.array(ProductionUnitSchema.create)
}) satisfies z.ZodType<Entity.Company.Create>

export default abstract class CompanySchema {
    public static create = CreateCompanySchema
}
