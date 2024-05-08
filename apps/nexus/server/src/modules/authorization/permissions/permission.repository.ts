export default abstract class PermissionRepository {
    public static async insert({}: Entity.Permission.Insert) {}

    public static async insertMany(type: Enum.Authorization.PermissionType, permissions: Entity.Permission.Insert[]) {
        if (type === Enum.Authorization.PermissionType.ROLE) {
            const roles_permissions = await Database.sql<
                Entity.Permission[]
            >`INSERT INTO roles_permissions ${Database.sql(permissions)} RETURNING *;`

            return roles_permissions
        }

        if (type === Enum.Authorization.PermissionType.API_KEY) {
            const api_key_permissions = await Database.sql<
                Entity.Permission[]
            >`INSERT INTO api_keys_permissions ${Database.sql(permissions)} RETURNING *;`

            return api_key_permissions
        }

        throw new Error('Invalid permission type')
    }
}
