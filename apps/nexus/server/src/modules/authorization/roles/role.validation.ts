import PermissionValidation from '../permissions/permission.validation'

const CreateRoleSchema = z.object({
    title: z.string().min(1).max(255),
    description: z.string().min(1).max(255),
    permissions: z.array(PermissionValidation.create)
}) satisfies z.ZodType<Entity.Role.Create>

export default abstract class RoleValidation {
    public static create = CreateRoleSchema
}
