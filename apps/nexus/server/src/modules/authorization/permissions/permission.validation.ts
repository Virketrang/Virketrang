import { Enum } from '@/packages'

const CreatePermissionSchema = z.object({
    name: z.nativeEnum(Enum.Authorization.Permission),
    write: z.boolean(),
    read: z.boolean(),
    modify: z.boolean(),
    remove: z.boolean()
}) satisfies z.ZodType<Entity.Permission.Create>

export default abstract class PermissionValidation {
    public static create = CreatePermissionSchema
}
