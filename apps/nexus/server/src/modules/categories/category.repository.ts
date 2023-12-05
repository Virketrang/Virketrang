interface CategoryName {
    id: string
    category_id: string
    locale_id: string
    value: string
    updated_at: Date
    created_at: Date
}

export default abstract class CategoryRepository {
    public static async selectById(id: string): Promise<Entity.Category | null> {
        const category = await Database.sql<Entity.Category[]>`SELECT * FROM categories WHERE id = ${id}`

        if (!category[0]) return null

        return category[0]
    }

    public static async selectAll(id: string): Promise<Entity.Category[]> {
        const categories = await Database.sql<Entity.Category[]>`WITH RECURSIVE category_tree AS (
            SELECT 
                id, 
                unique_identifier, 
                path, 
                created_at, 
                updated_at
            FROM 
                categories
            WHERE 
                company_id = ${id} AND text(path) = unique_identifier
        
            UNION ALL
        
            SELECT 
                c.id, 
                c.unique_identifier, 
                c.path, 
                c.created_at, 
                c.updated_at
            FROM 
                categories c
            JOIN 
                category_tree ct ON text(c.path) = ct.unique_identifier || '.' || c.unique_identifier
            WHERE 
                c.company_id = ${id}
        )
        SELECT 
            ct.id, 
            ct.unique_identifier, 
            ct.path, 
            ct.created_at, 
            ct.updated_at,
            (SELECT json_agg(ct2) FROM category_tree ct2 WHERE text(ct2.path) = ct.unique_identifier || '.' || ct2.unique_identifier) as children
        FROM 
            category_tree ct
        WHERE 
            text(ct.path) = ct.unique_identifier
        GROUP BY 
            ct.id, 
            ct.unique_identifier, 
            ct.path, 
            ct.created_at, 
            ct.updated_at;`
        return categories
    }

    public static async insert({
        company_id,
        path,
        unique_identifier
    }: Entity.Category.Insert): Promise<Entity.Category> {
        const category = await Database.sql<
            Entity.Category[]
        >`INSERT INTO categories (company_id, path, unique_identifier) VALUES (${company_id}, ${path}, ${unique_identifier}) RETURNING *`

        return category[0]
    }

    public static async insertManyNames({
        category_id,
        entries
    }: {
        category_id: string
        entries: { value: string; locale_id: string }[]
    }): Promise<CategoryName[]> {
        const names = await Database.sql<CategoryName[]>`INSERT INTO categories_names_translations ${Database.sql(
            entries
        )} RETURNING *;`

        return names
    }
}
