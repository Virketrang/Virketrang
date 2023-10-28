import _HTTP from './http'
import _I18N from './i18n'
import _Entity from './entities'

import _SORTING_OPTION from '../enums/sorting-option.enum'
import _PRODUCT_CATEGORY from '../enums/product-category.enum'
import _CUSTOMER_TYPE from '../enums/customer-type.enum'
import _ACCOUNTING_CLASS from '../enums/accounting-class.enum'
import _ACCOUNT_TYPE from '../enums/account-type.enum'
import _CORPORATE_FORM from '../enums/corporate-form.enum'
import _GENDER from '../enums/gender.enum'
import _INCOME_TYPE from '../enums/income-type.enum'
import _FIXED_ASSET_TYPE from '../enums/fixed-asset-type.enum'
import _Action from '../enums/authorization/action.enum'
import _Permission from '../enums/authorization/permission.enum'

declare global {
    namespace Workspace {
        export import HTTP = _HTTP

        export import I18N = _I18N

        export import Entity = _Entity

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
                export import Action = _Action
                export import Permission = _Permission
            }
        }
    }
}

export {}
