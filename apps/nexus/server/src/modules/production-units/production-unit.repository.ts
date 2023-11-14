export default abstract class ProductionUnitRepository {
    public static async insert({ unit_number, address_id, company_id }: Entity.ProductionUnit.Insert) {
        const result = await Database.sql<
            Entity.ProductionUnit[]
        >`INSERT INTO production_units (unit_number, address_id, company_id) VALUES (${unit_number}, ${address_id}, ${company_id}) RETURNING *;`

        return result[0]
    }

    public static async insertMany(productionUnits: Entity.ProductionUnit.Insert[]) {
        const result = await Database.sql<Entity.ProductionUnit[]>`INSERT INTO production_units ${Database.sql(
            productionUnits
        )} RETURNING *;`

        return result
    }

    public static async selectByCompanyAndName(companyId: string, name: string) {
        const result = await Database.sql<
            Entity.ProductionUnit[]
        >`SELECT * FROM production_units WHERE company_id = ${companyId} AND name = ${name};`

        return result[0]
    }
}
