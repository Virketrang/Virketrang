export default abstract class UserRepository {
    public static async insert({
        email,
        password,
        profile_id,
        contact_info_id,
        bank_account_id
    }: Entity.User.Insert): Promise<Entity.User> {
        const result = await Database.sql<
            Entity.User[]
        >`INSERT INTO users (email, password, profile_id, contact_info_id, bank_account_id) VALUES (${email}, ${password}, ${profile_id}, ${contact_info_id}, ${bank_account_id}) RETURNING id, email, (SELECT row_to_json(profiles.*) FROM profiles WHERE id = users.profile_id) AS profile, (SELECT row_to_json(contact_infos.*) FROM contact_infos WHERE id = users.contact_info_id) AS contact_info, (SELECT row_to_json(bank_accounts.*) FROM bank_accounts WHERE id = users.bank_account_id) AS bank_account, created_at, updated_at;`

        return result[0]
    }

    public static async insertMany(users: Entity.User.Insert[]): Promise<Entity.User[]> {
        const result = await Database.sql<Entity.User[]>`INSERT INTO users ${Database.sql(users)} RETURNING *;`

        return result
    }

    public static async selectAll(): Promise<Entity.User[]> {
        const users = await Database.sql<Entity.User[]>`SELECT * FROM users;`

        return users
    }

    public static async selectById(id: string): Promise<Entity.User> {
        const users = await Database.sql<Entity.User[]>`SELECT * FROM users WHERE id = ${id};`

        return users[0]
    }

    public static async selectByEmail<T extends 'password' | never>(
        email: string,
        options?: { include?: T }
    ): Promise<T extends 'password' ? Entity.User.WithPassword | undefined : Entity.User | undefined> {
        if (options && options.include === 'password') {
            const userWithPassword = await Database.sql<
                (T extends 'password' ? Entity.User.WithPassword : Entity.User)[]
            >`SELECT users.id, users.email, users.created_at, users.updated_at, users.password, row_to_json(profiles.*) AS profile, json_build_object('id', contact_infos.id, 'address', row_to_json(addresses.*), 'phone_number', row_to_json(phone_numbers.*), 'created_at', contact_infos.created_at, 'updated_at', contact_infos.updated_at) AS contact_info, row_to_json(bank_accounts.*) AS bank_account FROM users INNER JOIN profiles ON users.profile_id = profiles.id INNER JOIN contact_infos ON users.contact_info_id = contact_infos.id INNER JOIN addresses ON contact_infos.address_id = addresses.id INNER JOIN phone_numbers ON contact_infos.phone_number_id = phone_numbers.id INNER JOIN bank_accounts ON users.bank_account_id = bank_accounts.id WHERE users.email = ${email};`

            return userWithPassword[0]
        } else {
            const userWithoutPassword = await Database.sql<
                (T extends 'password' ? Entity.User.WithPassword : Entity.User)[]
            >`SELECT users.id, users.email, users.created_at, users.updated_at, row_to_json(profiles.*) AS profile, json_build_object('id', contact_infos.id, 'address', row_to_json(addresses.*), 'phone_number', row_to_json(phone_numbers.*), 'created_at', contact_infos.created_at, 'updated_at', contact_infos.updated_at) AS contact_info, row_to_json(bank_accounts.*) AS bank_account FROM users INNER JOIN profiles ON users.profile_id = profiles.id INNER JOIN contact_infos ON users.contact_info_id = contact_infos.id INNER JOIN addresses ON contact_infos.address_id = addresses.id INNER JOIN phone_numbers ON contact_infos.phone_number_id = phone_numbers.id INNER JOIN bank_accounts ON users.bank_account_id = bank_accounts.id WHERE users.email = ${email};`

            return userWithoutPassword[0]
        }
    }
}
