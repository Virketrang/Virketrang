export default abstract class ProductionUnitService {
    public static async create(
        company_id: string,
        { address, unit_number, primary_location }: Entity.ProductionUnit.Create
    ): Promise<Entity.ProductionUnit> {
        const { id: address_id } = await Address.service.create(address)

        const productionUnit = await ProductionUnit.repository.insert({
            address_id,
            unit_number: unit_number,
            primary_location,
            company_id
        })

        return productionUnit
    }

    public static async createMany(
        company_id: string,
        productionUnits: Entity.ProductionUnit.Create[]
    ): Promise<Entity.ProductionUnit[]> {
        const productionUnitsWithAddressId = await Promise.all(
            productionUnits.map(async ({ address, unit_number }) => {
                const { id: address_id } = await Address.service.create(address)

                return { address_id, unit_number: unit_number, company_id }
            })
        )

        const units = await ProductionUnit.repository.insertMany(productionUnitsWithAddressId)

        return units
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
