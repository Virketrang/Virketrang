export { default as Action } from './action.enum'
export { default as Permission } from './permission.enum'

import Action from './action.enum'
import Permission from './permission.enum'

export default abstract class Authorization {
    public static readonly Action = Action
    public static readonly Permission = Permission
}
