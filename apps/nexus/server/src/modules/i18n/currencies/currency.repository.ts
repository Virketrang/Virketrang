export default abstract class CurrencyRepository {
    public static async selectAll(company_id: string): Promise<Entity.Currency[]> {
        console.log(company_id)
        return await Database.sql<Entity.Currency[]>`SELECT * FROM currencies WHERE company_id = ${company_id};`
    }

    public static async insert({
        company_id,
        currency_code,
        currency_name,
        currency_symbol
    }: Entity.Currency.Insert): Promise<Entity.Currency> {
        const currency = await Database.sql<
            Entity.Currency[]
        >`INSERT INTO currencies (company_id, currency_code, currency_name, currency_symbol) VALUES (${company_id}, ${currency_code}, ${currency_name}, ${currency_symbol}) RETURNING *`

        return currency[0]
    }
}
