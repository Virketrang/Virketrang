export default abstract class LocaleRepository {
    public static async selectAll(company_id: string): Promise<Entity.Locale[]> {
        return await Database.sql<
            Entity.Locale[]
        >`SELECT locales.id, locales.company_id, locales.created_at, locales.updated_at, row_to_json((SELECT language FROM (SELECT languages.id, languages.language_name, languages.language_code, languages.created_at, languages.updated_at) language)) AS language, row_to_json((SELECT currency FROM (SELECT currencies.id, currencies.currency_name, currencies.currency_code, currencies.currency_symbol, currencies.created_at, currencies.updated_at) currency)) AS currency FROM locales INNER JOIN languages ON locales.language_id = languages.id INNER JOIN currencies ON locales.currency_id = currencies.id WHERE locales.company_id = ${company_id};`
    }

    public static async insert({ company_id, language_id, currency_id }: Entity.Locale.Insert): Promise<Entity.Locale> {
        const locale = await Database.sql<
            Entity.Locale[]
        >`INSERT INTO locales (company_id, language_id, currency_id) VALUES (${company_id}, ${language_id}, ${currency_id}) RETURNING *;`

        return locale[0]
    }

    public static async delete({ company_id, locale_id }: Entity.Locale.Delete): Promise<boolean> {
        await Database.sql`DELETE FROM locales WHERE company_id = ${company_id} AND id = ${locale_id};`

        return true
    }
}
