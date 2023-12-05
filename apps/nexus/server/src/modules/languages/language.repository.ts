export default abstract class LanguageRepository {
    public static async insert({
        language_code,
        language_name,
        company_id
    }: Entity.Language.Insert): Promise<Entity.Language> {
        const language = await Database.sql<
            Entity.Language[]
        >`INSERT INTO languages (language_code, language_name, company_id) VALUES (${language_code}, ${language_name}, ${company_id}) RETURNING *`

        return language[0]
    }

    public static async selectAll(company_id: string): Promise<Entity.Language[]> {
        const languages = await Database.sql<
            Entity.Language[]
        >`SELECT * FROM languages WHERE company_id = ${company_id}`

        return languages
    }
}
