import CompanySchema from './company'
import AddressSchema from './address'
import PhoneNumberSchema from './phone-number'
import BankAccountSchema from './bank-account'
import UserSchema from './user'
import PersonSchema from './person'
import ProductionUnitSchema from './production-unit'
import AuthenticationSchema from './authentication/index'
import ProfileSchema from './profile'
import ProductSchema from './product'
import ImageSchema from './image'
import I18nSchema from './i18n'
import MeasurementSchema from './measurement'

export default abstract class Validation {
    public static readonly Company = CompanySchema
    public static readonly Address = AddressSchema
    public static readonly PhoneNumber = PhoneNumberSchema
    public static readonly BankAccount = BankAccountSchema
    public static readonly User = UserSchema
    public static readonly Person = PersonSchema
    public static readonly ProductionUnit = ProductionUnitSchema
    public static readonly Authentication = AuthenticationSchema
    public static readonly Profile = ProfileSchema
    public static readonly Product = ProductSchema
    public static readonly Image = ImageSchema
    public static readonly I18n = I18nSchema
    public static readonly Measurement = MeasurementSchema
}
