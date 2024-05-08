import PermissionValidation from '../../authorization/permissions/permission.validation'

const CreateKeySchema = z.object({
    name: z.string().min(1).max(255),
    description: z.string().min(1).max(255),
    key: z.string(),
    permissions: z.array(PermissionValidation.create)
}) satisfies z.ZodType<Entity.ApiKey.Create>

export default abstract class KeyValidation {
    public static create = CreateKeySchema
}
