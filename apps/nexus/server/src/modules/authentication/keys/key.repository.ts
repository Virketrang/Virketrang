export default abstract class KeyRepository {
    public static async insert({ company_id, name, description, key }: Entity.ApiKey.Insert): Promise<Entity.ApiKey> {
        const api_key = await Database.sql<
            Entity.ApiKey[]
        >`INSERT INTO roles (company_id, name, description, key) VALUES (${company_id}, ${name}, ${description}, ${key}) RETURNING *`

        return api_key[0]
    }

    public static async selectAll(id: string): Promise<Entity.ApiKey[]> {
        return await Database.sql<Entity.ApiKey[]>`SELECT * FROM api_keys WHERE company_id = ${id}`
    }
}
