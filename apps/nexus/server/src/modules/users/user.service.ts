import {bearerAuth} from 'hono/bearer-auth'

export default abstract class UserService {
    public static async create(
        companyId: string,
        {
            address,
            private_phone_number,
            bank_account,
            birth_date,
            password,
            employee_number,
            production_unit_id,
            private_email,
            ...rest
        }: Entity.User.Create
    ): Promise<Entity.User> {
        const { id: address_id } = await Address.service.create(address)
        const { id: private_phone_number_id } = await PhoneNumber.service.create(private_phone_number)
        const { id: bank_account_id } = await BankAccount.service.create(bank_account)

        const user = await User.repository.insert({
            company_id: companyId,
            production_unit_id: production_unit_id,
            employee_number: employee_number,
            address_id: address_id,
            private_email: private_email,
            password: password,
            private_phone_number_id,
            bank_account_id,
            birth_date: birth_date,
            ...rest
        })

        return user
    }

    public static async createMany(companyId: string, createUsers: Entity.User.Create[]): Promise<Entity.User[]> {
        const users = await Promise.all(
            createUsers.map(
                async ({
                    address,
                    private_phone_number,
                    bank_account,
                    birth_date,
                    employee_number,
                    production_unit_id,
                    private_email,
                    ...rest
                }) => {
                    const { id: address_id } = await Address.service.create(address)
                    const { id: private_phone_number_id } = await PhoneNumber.service.create(private_phone_number)
                    const { id: bank_account_id } = await BankAccount.service.create(bank_account)

                    return {
                        company_id: companyId,
                        production_unit_id: production_unit_id,
                        address_id,
                        private_email: private_email,
                        private_phone_number_id,
                        bank_account_id,
                        birth_date: birth_date,
                        employee_number: employee_number,
                        ...rest
                    }
                }
            )
        )

        console.log(users)

        return await User.repository.insertMany(users)
    }

    public static retrieveAll() {
        return 'Users retrieved'
    }

    public static retrieve() {
        return 'User retrieved'
    }

    public static update() {
        return 'User updated'
    }

    public static delete() {
        return 'User deleted'
    }
}
