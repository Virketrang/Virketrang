export * from './authorization'

export { default as SORTING_OPTION } from './sorting-option.enum'
export { default as PRODUCT_CATEGORY } from './product-category.enum'
export { default as CUSTOMER_TYPE } from './customer-type.enum'
export { default as ACCOUNTING_CLASS } from './accounting-class.enum'
export { default as ACCOUNT_TYPE } from './account-type.enum'
export { default as CORPORATE_FORM } from './corporate-form.enum'
export { default as GENDER } from './gender.enum'
export { default as INCOME_TYPE } from './income-type.enum'
export { default as FIXED_ASSET_TYPE } from './fixed-asset-type.enum'

import SORTING_OPTION from './sorting-option.enum'
import PRODUCT_CATEGORY from './product-category.enum'
import CUSTOMER_TYPE from './customer-type.enum'
import ACCOUNTING_CLASS from './accounting-class.enum'
import ACCOUNT_TYPE from './account-type.enum'
import CORPORATE_FORM from './corporate-form.enum'
import GENDER from './gender.enum'
import INCOME_TYPE from './income-type.enum'
import FIXED_ASSET_TYPE from './fixed-asset-type.enum'

import Authorization from './authorization'

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

    public static readonly Authorization = Authorization
}
