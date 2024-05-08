import AuthenticationValidation from '../../modules/authentication/authentication/authentication.validation'
import CompanyValidation from '../../modules/companies/companies/company.validation'
import ProductionUnitValidation from '../../modules/companies/production-units/production-unit.validation'
import MeasurementValidation from '../../modules/products/measurements/measurement.validation'
import ProductValidation from '../../modules/products/products/product.validation'
import AddressValidation from '../../modules/shared/addresses/address.validation'
import BankAccountValidation from '../../modules/shared/bank-accounts/bank-account.validation'
import ImageValidation from '../../modules/shared/images/image.validation'
import PhoneNumberValidation from '../../modules/shared/phone-numbers/phone-number.validation'
import ProfileValidation from '../../modules/shared/profiles/profile.validation'
import UserValidation from '../../modules/users/users/user.validation'
import I18nValidation from './i18n'
import PersonValidation from './person'

export default abstract class Validation {
    public static readonly Company = CompanyValidation
    public static readonly Address = AddressValidation
    public static readonly PhoneNumber = PhoneNumberValidation
    public static readonly BankAccount = BankAccountValidation
    public static readonly User = UserValidation
    public static readonly Person = PersonValidation
    public static readonly ProductionUnit = ProductionUnitValidation
    public static readonly Authentication = AuthenticationValidation
    public static readonly Profile = ProfileValidation
    public static readonly Product = ProductValidation
    public static readonly Image = ImageValidation
    public static readonly I18n = I18nValidation
    public static readonly Measurement = MeasurementValidation
}
