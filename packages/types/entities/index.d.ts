import _BaseEntity from './abstract/base-entity'
import _Measurement from './abstract/measurement'
import _Description from './abstract/description'
import _Address from './abstract/address'
import _Person from './abstract/person'
import _Bank from './abstract/bank'
import _PhoneNumber from './abstract/phone-number'

import _Division from './product/division'
import _Subdivision from './product/subdivision'
import _Product from './product/product'
import _Image from './image'
import _Customer from './customer'
import _Order from './order'
import _Company from './company'
import _Account from './accounting/account'
import _IncomeStatement from './accounting/income-statement'
import _BalanceSheet from './accounting/balance-sheet'
import _AnnualReport from './accounting/annual-report'
import _User from './user'
import _Invoice from './accounting/invoice'
import _CreditNote from './accounting/credit-note'
import _Permission from './authorization/permission'
import _Role from './authorization/role'
import _ProductionUnit from './production-unit'
import _Content from './cms/content'
import _ContentType from './cms/content-type'
import _ContentTypeField from './cms/content-type-field'
import _Payslip from './payslip'
import _FixedAssetRegister from './accounting/fixed-asset-register'
import _FixedAssetGroup from './accounting/fixed-asset-group'
import _ApiKey from './authorization/api-key'
import _VatCode from './accounting/vat-code'
import _PayPeriod from './accounting/pay-period'
import _FixedAsset from './accounting/fixed-asset'

declare namespace Entity {
    // ABSTRACT
    export interface BaseEntity extends _BaseEntity {}

    export interface Measurement extends _Measurement {}

    export interface Description extends _Description {}

    export interface Address extends _Address {}

    export interface Person extends _Person {}

    export interface Bank extends _Bank {}

    export interface PhoneNumber extends _PhoneNumber {}

    // ENTITIES
    export import PayPeriod = _PayPeriod

    export import VatCode = _VatCode

    export import FixedAsset = _FixedAsset

    export import ApiKey = _ApiKey

    export import FixedAssetGroup = _FixedAssetGroup

    export import FixedAssetRegister = _FixedAssetRegister

    export import Payslip = _Payslip

    export import ContentTypeField = _ContentTypeField

    export import ContentType = _ContentType

    export import Content = _Content

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

export default Entity
