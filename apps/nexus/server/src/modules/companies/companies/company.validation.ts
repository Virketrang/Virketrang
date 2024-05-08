import AddressValidation from '../../shared/addresses/address.validation'
import BankAccountValidation from '../../shared/bank-accounts/bank-account.validation'
import PhoneNumberValidation from '../../shared/phone-numbers/phone-number.validation'
import ProductionUnitValidation from '../production-units/production-unit.validation'

const CreateCompanySchema = z.object({
    company_name: z.string(),
    company_number: z.coerce.number(),
    accounting_class: z.nativeEnum(Enum.ACCOUNTING_CLASS),
    corporate_form: z.nativeEnum(Enum.CORPORATE_FORM),
    employer: z.coerce.boolean(),
    phone_number: PhoneNumberValidation.create,
    address: AddressValidation.create,
    bank_account: BankAccountValidation.create,
    production_units: z.array(ProductionUnitValidation.create)
}) satisfies z.ZodType<Entity.Company.Create>

export default abstract class CompanyValidation {
    public static createCompany = CreateCompanySchema
}
