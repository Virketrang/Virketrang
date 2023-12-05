export default abstract class CompanyService {
    public static async create({
        address,
        phone_number,
        bank_account,
        production_units,
        accounting_class,
        company_name,
        company_number,
        corporate_form,
        employer
    }: Entity.Company.Create): Promise<Entity.Company> {
        const { id: address_id } = await Address.service.create(address)
        const { id: phone_number_id } = await PhoneNumber.service.create(phone_number)
        const { id: bank_account_id } = await BankAccount.service.create(bank_account)

        const company = await Company.repository.insert({
            accounting_class,
            company_name,
            address_id,
            phone_number_id,
            bank_account_id,
            company_number,
            corporate_form,
            employer
        })

        const units = await ProductionUnit.service.createMany(company.id, production_units)

        return { ...company, production_units: units }
    }

    public static async findAll(options: { relations?: { users?: boolean } }): Promise<Entity.Company[]> {
        return await Company.repository.selectAll(options)
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

    public static async findByUserId(id: string): Promise<Entity.Company[]> {
        return await Company.repository.selectByUserId(id)
    }

    public static async asignCompanyToUser(user_id: string, company_id: string): Promise<boolean> {
        console.log(user_id, company_id)
        return await Company.repository.asignCompanyToUser(user_id, company_id)
    }
}
