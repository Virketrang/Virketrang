export default abstract class RoleRepository {
    public static async insert({ company_id, title, description }: Entity.Role.Insert): Promise<Entity.Role> {
        const role = await Database.sql<
            Entity.Role[]
        >`INSERT INTO roles (company_id, title, description) VALUES (${company_id}, ${title}, ${description}) RETURNING *`

        return role[0]
    }

    public static async selectAll(id: string): Promise<Entity.Role[]> {
        return await Database.sql<Entity.Role[]>`SELECT * FROM roles WHERE company_id = ${id}`
    }
}
