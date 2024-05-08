export default abstract class BankAccountRepository {
    public static async insert({
        registration_number,
        account_number,
        swift_code,
        iban
    }: Entity.BankAccount.Insert): Promise<Entity.BankAccount> {
        const result = await Database.sql<
            Entity.BankAccount[]
        >`INSERT INTO bank_accounts (registration_number, account_number, swift, iban) VALUES (${registration_number}, ${account_number}, ${
            swift_code || null
        }, ${iban || null}) RETURNING *;`

        return result[0]
    }
}
