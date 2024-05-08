export default abstract class CategoryService {
    public static async create(
        company_id: string,
        { parent_id, unique_identifier, names }: Entity.Category.Create
    ): Promise<Entity.Category> {
        if (!parent_id) {
            const category = await Category.repository.insert({
                company_id,
                path: unique_identifier,
                unique_identifier
            })

            return category
        } else {
            const parent = await Category.repository.selectById(parent_id)

            if (!parent) throw new Error('Parent category not found')

            const category = await Category.repository.insert({
                company_id,
                path: `${parent.path}.${unique_identifier}`,
                unique_identifier
            })

            if (names) {
                const categoryNames = await Category.repository.insertManyNames({ entries: names })
                return { ...category, names: categoryNames }
            } else return category
        }
    }
}
