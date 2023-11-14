import companySchema from './company.validation'
import addressSchema from './address.validation'
import phoneNumberSchema from './phone-number.validation'
import bankAccountSchema from './bank-account.validation'
import userSchema from './user.validation'
import personSchema from './person.validation'
import productionUnitSchema from './production-unit.validation'

export default abstract class Validation {
    public static readonly Company = companySchema
    public static readonly Address = addressSchema
    public static readonly PhoneNumber = phoneNumberSchema
    public static readonly BankAccount = bankAccountSchema
    public static readonly User = userSchema
    public static readonly Person = personSchema
    public static readonly ProductionUnit = productionUnitSchema
}
