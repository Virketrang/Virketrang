import _Error from './http/error'
import _Failed from './http/failed'
import _Success from './http/success'
import _Response from './http/response'

import _I18NLocale from './i18n/locale'
import _Config from './i18n/config'
import _Text from './i18n/text'
import _Dictionary from './i18n/dictionary'

import _BaseEntity from './entities/abstract/base-entity'
import _Measurement from './entities/abstract/measurement'
import _Description from './entities/abstract/description'
import _Address from './entities/address'
import _Person from './entities/abstract/person'
import _BankAccount from './entities/bank-account'
import _PhoneNumber from './entities/phone-number'

import _Division from './entities/product/division'
import _Subdivision from './entities/product/subdivision'
import _Product from './entities/product/product'
import _Locale from './entities/locale'
import _Image from './entities/image'
import _Customer from './entities/customer'
import _Order from './entities/order'
import _Company from './entities/company'
import _Account from './entities/accounting/account'
import _IncomeStatement from './entities/accounting/income-statement'
import _BalanceSheet from './entities/accounting/balance-sheet'
import _AnnualReport from './entities/accounting/annual-report'
import _User from './entities/user'
import _Invoice from './entities/accounting/invoice'
import _CreditNote from './entities/accounting/credit-note'
import _Signup from './entities/authentication/signup'
import _Permission from './entities/authorization/permission'
import _Role from './entities/authorization/role'
import _Profile from './entities/profile'
import _ContactInfo from './entities/contact-info'
import _ProductionUnit from './entities/production-unit'
import _Content from './entities/cms/content'
import _ContentType from './entities/cms/content-type'
import _ContentTypeField from './entities/cms/content-type-field'
import _Currency from './entities/currency'
import _Category from './entities/category'
import _Payslip from './entities/payslip'
import _FixedAssetRegister from './entities/accounting/fixed-asset-register'
import _FixedAssetGroup from './entities/accounting/fixed-asset-group'
import _ApiKey from './entities/authorization/api-key'
import _VatCode from './entities/accounting/vat-code'
import _PayPeriod from './entities/accounting/pay-period'
import _FixedAsset from './entities/accounting/fixed-asset'
import _Employee from './entities/employee'
import _Signin from './entities/authentication/signin'
import _Language from './entities/language'

import _SORTING_OPTION from '../enums/other/sorting-option.enum'
import _PRODUCT_CATEGORY from '../enums/other/product-category.enum'
import _CUSTOMER_TYPE from '../enums/other/customer-type.enum'
import _ACCOUNTING_CLASS from '../enums/other/accounting-class.enum'
import _ACCOUNT_TYPE from '../enums/other/account-type.enum'
import _CORPORATE_FORM from '../enums/other/corporate-form.enum'
import _GENDER from '../enums/other/gender.enum'
import _INCOME_TYPE from '../enums/other/income-type.enum'
import _FIXED_ASSET_TYPE from '../enums/other/fixed-asset-type.enum'
import _AuthorizationAction from '../enums/authorization/action.enum'
import _AuthorizationPermission from '../enums/authorization/permission.enum'

declare global {
    namespace Http {
        export type Error = _Error

        export type Failed = _Failed

        export type Success<T> = _Success<T>

        export type Response<T> = _Response<T>
    }

    namespace I18N {
        export type Locale = _I18NLocale

        export type Config<T extends readonly string[]> = _Config<T>

        export type Text = _Text

        export type Dictionary<T extends (...args: any) => any> = _Dictionary<T>
    }

    namespace Entity {
        // ABSTRACT
        export interface BaseEntity extends _BaseEntity {}

        export interface Measurement extends _Measurement {}

        export interface Description extends _Description {}

        export interface Signup extends _Signup {}

        export import Address = _Address

        export import Person = _Person

        export import BankAccount = _BankAccount

        export import PhoneNumber = _PhoneNumber

        // ENTITIES
        export import PayPeriod = _PayPeriod

        export import VatCode = _VatCode

        export import FixedAsset = _FixedAsset

        export import Locale = _Locale

        export import Category = _Category

        export import Signin = _Signin

        export import ApiKey = _ApiKey

        export import Currency = _Currency

        export import Language = _Language

        export import Employee = _Employee

        export import FixedAssetGroup = _FixedAssetGroup

        export import FixedAssetRegister = _FixedAssetRegister

        export import Payslip = _Payslip

        export import ContentTypeField = _ContentTypeField

        export import ContentType = _ContentType

        export import Content = _Content

        export import ContactInfo = _ContactInfo

        export import Profile = _Profile

        export import ProductionUnit = _ProductionUnit

        export import Role = _Role

        export import Permission = _Permission

        export import CreditNote = _CreditNote

        export import Invoice = _Invoice

        export import Division = _Division

        export import Subdivision = _Subdivision

        export import Product = _Product

        export import Image = _Image

        export import Customer = _Customer

        export import Order = _Order

        export import Company = _Company

        export import Account = _Account

        export import IncomeStatement = _IncomeStatement

        export import BalanceSheet = _BalanceSheet

        export import AnnualReport = _AnnualReport

        export import User = _User
    }

    // @ts-ignore
    namespace Enum {
        export import SORTING_OPTION = _SORTING_OPTION
        export import PRODUCT_CATEGORY = _PRODUCT_CATEGORY
        export import CUSTOMER_TYPE = _CUSTOMER_TYPE
        export import ACCOUNTING_CLASS = _ACCOUNTING_CLASS
        export import ACCOUNT_TYPE = _ACCOUNT_TYPE
        export import CORPORATE_FORM = _CORPORATE_FORM
        export import GENDER = _GENDER
        export import INCOME_TYPE = _INCOME_TYPE
        export import FIXED_ASSET_TYPE = _FIXED_ASSET_TYPE

        namespace Authorization {
            export import Action = _AuthorizationAction
            export import Permission = _AuthorizationPermission
        }
    }

    namespace Primitive {
        namespace Boolean {
            type ToString = 'true' | 'false'
        }
    }
}

export {}
