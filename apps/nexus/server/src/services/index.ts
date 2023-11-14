import Address from '@/nexus/server/modules/addresses/address.service'
import BankAccount from '@/nexus/server/modules/bank-accounts/bank-account.service'
import Company from '@/nexus/server/modules/companies/company.service'
import PhoneNumber from '@/nexus/server/modules/phone-numbers/phone-number.service'
import User from '@/nexus/server/modules/users/user.service'

export default abstract class Service {
    public static Address = Address
    public static BankAccount = BankAccount
    public static Company = Company
    public static PhoneNumber = PhoneNumber
    public static User = User
}
