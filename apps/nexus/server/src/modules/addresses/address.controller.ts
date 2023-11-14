import AddressRepository from './address.repository'
import AddressService from './address.service'

export default abstract class Address {
    public static readonly router = new Hono()
    public static readonly service = AddressService
    public static readonly repository = AddressRepository

    public static routes() {
        this.router.post('/', (c) => {
            const address = this.service.create(c.req.json() as any)
            return c.json(address)
        })

        this.router.get('/', (c) => {
            return c.json({ message: 'Addresses retrieved' })
        })

        this.router.get('/:id', (c) => {
            return c.text('Address retrieved')
        })

        this.router.put('/:id', (c) => {
            return c.text('Addresses updated')
        })

        this.router.delete('/:id', (c) => {
            return c.text('Addresses deleted')
        })

        return this.router
    }
}
