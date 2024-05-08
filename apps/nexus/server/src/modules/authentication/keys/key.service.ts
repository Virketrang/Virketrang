import Key from './key.controller'

export default abstract class KeyService {
    public static async create(id: string, data: Entity.ApiKey.Create): Promise<Entity.ApiKey> {
        const key = await Key.repository.insert({ company_id: id, ...data })

        const permissions = await Permission.service.createMany(
            key.id,
            Enum.Authorization.PermissionType.API_KEY,
            data.permissions
        )

        return { ...key, permissions }
    }

    public static async findAll(id: string): Promise<Entity.ApiKey[]> {
        return Key.repository.selectAll(id)
    }
}
