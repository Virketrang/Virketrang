export default abstract class CompanyRepository {
    public static async insert({
        company_name,
        company_number,
        corporate_form,
        accounting_class,
        employer,
        address_id,
        bank_account_id,
        phone_number_id
    }: Entity.Company.Insert): Promise<Entity.Company> {
        const company = await Database.sql<
            Entity.Company[]
        >`INSERT INTO companies (company_name, corporate_form, company_number, accounting_class, employer, address_id, phone_number_id, bank_account_id) VALUES (${company_name}, ${corporate_form}, ${company_number}, ${accounting_class}, ${employer}, ${address_id}, ${phone_number_id}, ${bank_account_id}) RETURNING *;`

        return company[0]
    }

    public static async selectAll(): Promise<Entity.Company[]> {
        const companies = await Database.sql<Entity.Company[]>`SELECT * FROM companies;`

        return companies
    }

    public static async selectById(id: string): Promise<Entity.Company> {
        const companies = await Database.sql<Entity.Company[]>`SELECT * FROM companies WHERE id = ${id};`

        return companies[0]
    }
}
