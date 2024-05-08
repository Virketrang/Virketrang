import ProductionUnitRepository from './production-unit.repository'
import ProductionUnitService from './production-unit.service'

@Controller('/production-units')
export default abstract class ProductionUnit {
    public static readonly router = new Hono()
    public static readonly service = ProductionUnitService
    public static readonly repository = ProductionUnitRepository

    public static routes() {
        this.router.post('/:company', (ctx) => {
            const companyId = ctx.req.param('company')
            const productionUnit = this.service.create(companyId, ctx.req.json() as any)
            return ctx.json(productionUnit)
        })

        this.router.get('/', (c) => {
            return c.json({ message: 'Production units retrieved' })
        })

        this.router.get('/:id', (c) => {
            return c.text('Production unit retrieved')
        })

        this.router.put('/:id', (c) => {
            return c.text('Production unit updated')
        })

        this.router.delete('/:id', (c) => {
            return c.text('Production unit deleted')
        })

        return this.router
    }
}
