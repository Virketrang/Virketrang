export default abstract class LanguageService {
    public static async create(
        company_id: string,
        { language_code, language_name }: Entity.Language.Create
    ): Promise<Entity.Language> {
        const language = await Language.repository.insert({ company_id, language_code, language_name })

        return language
    }

    public static async findAll(company_id: string): Promise<Entity.Language[]> {
        const languages = await Language.repository.selectAll(company_id)

        return languages
    }
}
