export { default as Action } from './action.enum'
export { default as Permission } from './permission.enum'
export { default as PermissionType } from './permission-type.enum'

import Action from './action.enum'
import Permission from './permission.enum'
import PermissionType from './permission-type.enum'

export default abstract class Authorization {
    public static readonly Action = Action
    public static readonly Permission = Permission
    public static readonly PermissionType = PermissionType
}
