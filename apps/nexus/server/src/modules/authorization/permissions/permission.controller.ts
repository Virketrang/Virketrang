import PermissionRepository from './permission.repository'
import PermissionService from './permission.service'

@Controller('/permissions')
export default abstract class Permission {
    public static readonly router = new Hono()
    public static readonly service = PermissionService
    public static readonly repository = PermissionRepository
}
