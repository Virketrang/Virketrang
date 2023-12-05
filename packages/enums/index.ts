export { default as SORTING_OPTION } from './other/sorting-option.enum'
export { default as PRODUCT_CATEGORY } from './other/product-category.enum'
export { default as CUSTOMER_TYPE } from './other/customer-type.enum'
export { default as ACCOUNTING_CLASS } from './other/accounting-class.enum'
export { default as ACCOUNT_TYPE } from './other/account-type.enum'
export { default as CORPORATE_FORM } from './other/corporate-form.enum'
export { default as GENDER } from './other/gender.enum'
export { default as INCOME_TYPE } from './other/income-type.enum'
export { default as FIXED_ASSET_TYPE } from './other/fixed-asset-type.enum'
export { default as STATUS } from './http/status.enum'

import SORTING_OPTION from './other/sorting-option.enum'
import PRODUCT_CATEGORY from './other/product-category.enum'
import CUSTOMER_TYPE from './other/customer-type.enum'
import ACCOUNTING_CLASS from './other/accounting-class.enum'
import ACCOUNT_TYPE from './other/account-type.enum'
import CORPORATE_FORM from './other/corporate-form.enum'
import GENDER from './other/gender.enum'
import INCOME_TYPE from './other/income-type.enum'
import FIXED_ASSET_TYPE from './other/fixed-asset-type.enum'

export default abstract class Enum {
    public static readonly SORTING_OPTION = SORTING_OPTION
    public static readonly PRODUCT_CATEGORY = PRODUCT_CATEGORY
    public static readonly CUSTOMER_TYPE = CUSTOMER_TYPE
    public static readonly ACCOUNTING_CLASS = ACCOUNTING_CLASS
    public static readonly ACCOUNT_TYPE = ACCOUNT_TYPE
    public static readonly CORPORATE_FORM = CORPORATE_FORM
    public static readonly GENDER = GENDER
    public static readonly INCOME_TYPE = INCOME_TYPE
    public static readonly FIXED_ASSET_TYPE = FIXED_ASSET_TYPE
}
