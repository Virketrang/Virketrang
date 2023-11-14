export default abstract class BankAccountService {
    public static async create(bankAccount: Entity.BankAccount.Create) {
        return await BankAccount.repository.insert(bankAccount)
    }

    public static retrieveAll() {
        return 'BankAccounts retrieved'
    }

    public static retrieve() {
        return 'BankAccount retrieved'
    }

    public static update() {
        return 'BankAccount updated'
    }

    public static remove() {
        return 'BankAccount deleted'
    }
}
