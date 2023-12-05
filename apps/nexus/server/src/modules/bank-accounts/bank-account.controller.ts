import BankAccountRepository from './bank-account.repository'
import BankAccountService from './bank-account.service'

@Controller('/bank-accounts')
export default abstract class BankAccount {
    public static readonly router = new Hono()
    public static readonly service = BankAccountService
    public static readonly repository = BankAccountRepository

    public static routes() {
        this.router.post('/', (c) => {
            const bankAccount = this.service.create(c.req.json() as any)
            return c.json(bankAccount)
        })

        this.router.get('/', (c) => {
            return c.json({ message: 'Bank accounts retrieved' })
        })

        this.router.get('/:id', (c) => {
            return c.text('Bank account retrieved')
        })

        this.router.put('/:id', (c) => {
            return c.text('Bank accounts updated')
        })

        this.router.delete('/:id', (c) => {
            return c.text('Bank accounts deleted')
        })

        return this.router
    }
}
