export default abstract class CurrencyService {
    public static async findAll(company_id: string): Promise<Entity.Currency[]> {
        return await Currency.repository.selectAll(company_id)
    }

    public static async create(id: string, data: Entity.Currency.Create): Promise<Entity.Currency> {
        return await Currency.repository.insert({ company_id: id, ...data })
    }
}
