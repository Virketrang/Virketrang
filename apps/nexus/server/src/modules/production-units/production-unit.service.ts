export default abstract class ProductionUnitService {
    public static async create(
        companyId: string,
        { address, unit_number }: Entity.ProductionUnit.Create
    ): Promise<Entity.ProductionUnit> {
        const { id: address_id } = await Address.service.create(address)

        return await ProductionUnit.repository.insert({ company_id: companyId, address_id, unit_number: unit_number })
    }

    public static async createMany(
        companyId: string,
        productionUnits: Entity.ProductionUnit.Create[]
    ): Promise<Entity.ProductionUnit[]> {
        const productionUnitsWithAddressId = await Promise.all(
            productionUnits.map(async ({ address, unit_number }) => {
                const { id: address_id } = await Address.service.create(address)

                return { address_id, unit_number: unit_number, company_id: companyId }
            })
        )

        return await ProductionUnit.repository.insertMany(productionUnitsWithAddressId)
    }

    public static findAll() {
        return 'ProductionUnits retrieved'
    }

    public static findById() {
        return 'ProductionUnit retrieved'
    }

    public static update() {
        return 'ProductionUnit updated'
    }

    public static delete() {
        return 'ProductionUnit deleted'
    }
}
