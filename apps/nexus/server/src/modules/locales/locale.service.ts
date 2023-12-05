export default abstract class LocaleService {
    public static async findAll(company_id: string): Promise<Entity.Locale[]> {
        return await Locale.repository.selectAll(company_id)
    }

    public static async create(company_id: string, data: Entity.Locale.Create): Promise<Entity.Locale> {
        console.log(data)
        return await Locale.repository.insert({ company_id, ...data })
    }

    public static async remove(company_id: string, locale_id: string): Promise<boolean> {
        return await Locale.repository.delete({ company_id, locale_id })
    }
}
