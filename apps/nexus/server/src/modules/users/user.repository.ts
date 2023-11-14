export default abstract class UserRepository {
    public static async insert({
        firstname,
        lastname,
        private_email,
        username,
        password,
        active,
        company_id,
        employee_number,
        birth_date,
        address_id,
        gender,
        owner,
        bank_account_id,
        private_phone_number_id,
        production_unit_id
    }: Entity.User.Insert): Promise<Entity.User> {
        const result = await Database.sql<
            Entity.User[]
        >`INSERT INTO users (firstname, lastname, private_email, username, user_password, active, company_owner, employee_number, birth_date, gender, address_id, bank_account_id, company_id, production_unit_id, private_phone_number_id) VALUES (${firstname}, ${lastname}, ${private_email}, ${username}, ${password}, ${
            active || true
        }, ${
            owner || false
        }, ${employee_number}, ${birth_date}, ${gender}, ${address_id}, ${bank_account_id}, ${company_id}, ${production_unit_id}, ${private_phone_number_id}) RETURNING *;`

        return result[0]
    }

    public static async insertMany(users: Entity.User.Insert[]): Promise<Entity.User[]> {
        const result = await Database.sql<Entity.User[]>`INSERT INTO users ${Database.sql(users)} RETURNING *;`

        return result
    }
}
