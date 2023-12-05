import CurrencyRepository from './currency.repository'
import CurrencyService from './currency.service'
import CurrencyValidation from './currency.validation'

@Controller('/currencies')
export default abstract class Currency {
    public static readonly router = new Hono()
    public static readonly repository = CurrencyRepository
    public static readonly service = CurrencyService
    public static readonly validation = CurrencyValidation

    @Get('/')
    @Protected()
    public static async getAll(ctx: Hono.Context<Hono.Env, '/', {}>) {
        if (!ctx.req.company)
            return ctx.json<Http.Failed>({ message: 'Company not found', status: 'failed', statusCode: 404 })

        const currencies = await Currency.service.findAll(ctx.req.company.id)

        return ctx.json<Http.Success<Entity.Currency[]>>({ body: currencies, status: 'success', statusCode: 200 }, 200)
    }

    @Post('/')
    @Protected()
    @Validator('json', (value) => Currency.validation.create.safeParse(value))
    public static async create(ctx: Hono.Context<Hono.Env, '/', JSON.Body<Entity.Currency.Create>>) {
        const parsed = ctx.req.valid('json')

        if (!parsed.success)
            return ctx.json<Http.Failed>({ message: parsed.error.issues, status: 'failed', statusCode: 400 })

        if (!ctx.req.company)
            return ctx.json<Http.Failed>({ message: 'Company not found', status: 'failed', statusCode: 404 })

        const currency = await Currency.service.create(ctx.req.company.id, parsed.data)

        return ctx.json<Http.Success<Entity.Currency>>({ body: currency, status: 'success', statusCode: 200 })
    }
}
