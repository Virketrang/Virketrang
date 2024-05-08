export default abstract class PermissionService {
    public static async create() {}

    public static async createMany(
        role_id: string,
        type: Enum.Authorization.PermissionType,
        permissions: Entity.Permission.Create[]
    ) {
        const result = await Permission.repository.insertMany(
            type,
            permissions.map((permission) => ({ role_id, ...permission }))
        )

        return result
    }
}
