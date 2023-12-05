export default abstract class UserService {
    public static async create({
        contact_info,
        profile,
        bank_account,
        password,
        email
    }: Entity.User.Create): Promise<Entity.User> {
        const { id: contact_info_id } = await ContactInfo.service.create(contact_info)
        const { id: profile_id } = await Profile.service.create(profile)
        const { id: bank_account_id } = await BankAccount.service.create(bank_account)

        const user = await User.repository.insert({
            email,
            password: await Authentication.service.hash(password),
            contact_info_id,
            profile_id,
            bank_account_id
        })

        return user
    }

    public static async createMany(createUsers: Entity.User.Create[]): Promise<Entity.User[]> {
        const users = await Promise.all(
            createUsers.map(async ({ email, profile, contact_info, bank_account, password }) => {
                const { id: contact_info_id } = await ContactInfo.service.create(contact_info)
                const { id: profile_id } = await Profile.service.create(profile)
                const { id: bank_account_id } = await BankAccount.service.create(bank_account)

                return {
                    email,
                    profile_id,
                    contact_info_id,
                    bank_account_id,
                    password: await Authentication.service.hash(password)
                }
            })
        )

        return await User.repository.insertMany(users)
    }

    public static async findAll() {
        return await User.repository.selectAll()
    }

    public static async findById(id: string) {
        return await User.repository.selectById(id)
    }

    public static async findByEmail(email: string, options?: { include?: 'password' }) {
        return await User.repository.selectByEmail(email, options)
    }

    public static update() {
        return 'User updated'
    }

    public static delete() {
        return 'User deleted'
    }
}
