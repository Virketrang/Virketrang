export default abstract class ProductionUnitRepository {
    public static async insert({
        unit_number,
        address_id,
        company_id,
        primary_location
    }: Entity.ProductionUnit.Insert) {
        const result = await Database.sql<
            Entity.ProductionUnit[]
        >`INSERT INTO production_units (unit_number, primary_location, address_id, company_id) VALUES (${unit_number}, ${
            primary_location || false
        }, ${address_id}, ${company_id}) RETURNING id, unit_number, primary_location, (SELECT row_to_json(addresses.*) FROM addresses WHERE id = production_units.address_id) AS address, company_id, created_at, updated_at;`

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

    public static async createRelationWithUser({
        productionUnitId,
        userId,
        primaryLocation
    }: Entity.ProductionUnit.CreateUserRelation) {
        const result = await Database.sql<
            Entity.ProductionUnit[]
        >`INSERT INTO production_unit_users (production_unit_id, user_id, primary_location) VALUES (${productionUnitId}, ${userId}, ${primaryLocation}) RETURNING *;`

        return result[0]
    }

    public static async createRelationWithCompany({
        productionUnitId,
        companyId,
        primaryLocation
    }: Entity.ProductionUnit.CreateCompanyRelation) {
        const result = await Database.sql<
            Entity.ProductionUnit[]
        >`INSERT INTO production_unit_companies (production_unit_id, company_id, primary_location) VALUES (${productionUnitId}, ${companyId}, ${primaryLocation}) RETURNING *;`

        return result[0]
    }

    public static async createManyRelationsWithUser(relations: Entity.ProductionUnit.CreateUserRelation[]) {
        const result = await Database.sql<Entity.ProductionUnit[]>`INSERT INTO production_unit_users ${Database.sql(
            relations
        )} RETURNING *;`

        return result
    }

    public static async createManyRelationsWithCompany(relations: Entity.ProductionUnit.CreateCompanyRelation[]) {
        const result = await Database.sql<Entity.ProductionUnit[]>`INSERT INTO production_unit_companies ${Database.sql(
            relations
        )} RETURNING *;`

        return result
    }
}
