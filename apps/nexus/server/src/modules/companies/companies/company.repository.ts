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
        >`INSERT INTO companies (company_name, corporate_form, company_number, accounting_class, employer, address_id, phone_number_id, bank_account_id) VALUES (${company_name}, ${corporate_form}, ${company_number}, ${accounting_class}, ${employer}, ${address_id}, ${phone_number_id}, ${bank_account_id}) RETURNING id, company_name, corporate_form, company_number, accounting_class, employer, (SELECT row_to_json(addresses.*) FROM addresses WHERE id = companies.address_id) AS address, created_at, updated_at;`

        return company[0]
    }

    public static async selectAll({ relations }: { relations?: { users?: boolean } }): Promise<Entity.Company[]> {
        if (relations?.users)
            return await Database.sql<
                Entity.Company[]
            >`SELECT * FROM companies INNER JOIN users_companies_relations ON companies.id = users_companies_relations.company_id;`

        return await Database.sql<Entity.Company[]>`SELECT * FROM companies;`
    }

    public static async selectById(id: string): Promise<Entity.Company> {
        const companies = await Database.sql<Entity.Company[]>`SELECT * FROM companies WHERE id = ${id};`

        return companies[0]
    }

    public static async selectByUserId(id: string): Promise<Entity.Company[]> {
        const companies = await Database.sql<
            Entity.Company[]
        >`SELECT companies.* FROM companies INNER JOIN users_companies_relations ON companies.id = users_companies_relations.company_id WHERE users_companies_relations.user_id = ${id};`

        return companies
    }

    public static async asignCompanyToUser(user_id: string, company_id: string): Promise<boolean> {
        try {
            await Database.sql`INSERT INTO users_companies_relations (user_id, company_id) VALUES (${user_id}, ${company_id}) RETURNING *;`
        } catch (error) {
            return false
        }
        return true
    }

    public static async delete(id: string): Promise<boolean> {
        try {
            await Database.sql`DELETE FROM companies WHERE id = ${id};`
        } catch (error) {
            return false
        }
        return true
    }
}
