export default abstract class CompanyService {
    public static async create({
        address,
        phone_number,
        bank_account,
        production_units,
        users,
        ...rest
    }: Entity.Company.Create): Promise<Entity.Company> {
        const { id: address_id } = await Address.service.create(address)
        const { id: phone_number_id } = await PhoneNumber.service.create(phone_number)
        const { id: bank_account_id } = await BankAccount.service.create(bank_account)

        const company = await Company.repository.insert({
            ...rest,
            address_id,
            phone_number_id,
            bank_account_id
        })

        const units = await ProductionUnit.service.createMany(company.id, production_units)

        console.log(units[0])

        const owners = await User.service.createMany(
            company.id,
            users.map(({ production_unit_id, ...user }) => ({
                production_unit_id: units.filter((unit) => unit['unit_number'].toString() === production_unit_id)[0].id,
                ...user
            }))
        )

        return { ...company, production_units: units, users: owners }
    }

    public static async findAll(): Promise<Entity.Company[]> {
        return await Company.repository.selectAll()
    }

    public static async findById(id: string): Promise<Entity.Company> {
        return await Company.repository.selectById(id)
    }

    public static update() {
        return 'Company updated'
    }

    public static remove() {
        return 'Company deleted'
    }
}
