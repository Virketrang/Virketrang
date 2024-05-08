export default abstract class RoleService {
    public static async create(id: string, data: Entity.Role.Create): Promise<Entity.Role> {
        const role = await Role.repository.insert({ company_id: id, ...data })

        const permissions = await Permission.service.createMany(
            role.id,
            Enum.Authorization.PermissionType.ROLE,
            data.permissions
        )

        return { ...role, permissions }
    }

    public static async findAll(id: string): Promise<Entity.Role[]> {
        return Role.repository.selectAll(id)
    }
}
