import PhoneNumberRepository from './phone-number.repository'
import PhoneNumberService from './phone-number.service'

export default abstract class PhoneNumber {
    public static readonly router = new Hono()
    public static readonly service = PhoneNumberService
    public static readonly repository = PhoneNumberRepository

    public static routes() {
        this.router.post('/', (c) => {
            const phoneNumber = this.service.create(c.req.json() as any)
            return c.json(phoneNumber)
        })

        this.router.get('/', (c) => {
            return c.json({ message: 'Phone numbers retrieved' })
        })

        this.router.get('/:id', (c) => {
            return c.text('Phone number retrieved')
        })

        this.router.put('/:id', (c) => {
            return c.text('Phone numbers updated')
        })

        this.router.delete('/:id', (c) => {
            return c.text('Phone numbers deleted')
        })

        return this.router
    }
}
