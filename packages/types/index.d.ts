import _HTTP from './http'
import _I18N from './i18n'
import _Entity from './entities'

declare global {
    declare namespace Workspace {
        export import HTTP = _HTTP

        export import I18N = _I18N

        export import Entity = _Entity
    }
}

export default Types
