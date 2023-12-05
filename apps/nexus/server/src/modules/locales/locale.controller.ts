import LocaleRepository from './locale.repository'
import LocaleService from './locale.service'
import LocaleValidation from './locale.validation'

@Controller('/locales')
export default abstract class Locale {
    public static readonly router = new Hono()
    public static readonly service = LocaleService
    public static readonly repository = LocaleRepository
    public static readonly validation = LocaleValidation

    @Get('/')
    @Protected()
    public static async getAll(ctx: Hono.Context<Hono.Env, '/', {}>) {
        if (!ctx.req.company)
            return ctx.json<Http.Failed>({ message: 'Company not found', status: 'failed', statusCode: 404 })

        const locales = await Locale.service.findAll(ctx.req.company.id)

        return ctx.json<Http.Success<Entity.Locale[]>>({ body: locales, status: 'success', statusCode: 200 }, 200)
    }

    @Post('/')
    @Protected()
    @Validator('json', (value) => Locale.validation.create.safeParse(value))
    public static async createLocale(ctx: Hono.Context<Hono.Env, '/', JSON.Body<Entity.Locale.Create>>) {
        const parsed = ctx.req.valid('json')
        console.log('TEST')
        if (!parsed.success)
            return ctx.json<Http.Failed>({ message: parsed.error.issues, status: 'failed', statusCode: 400 })

        if (!ctx.req.company)
            return ctx.json<Http.Failed>({ message: 'Company not found', status: 'failed', statusCode: 404 })

        const locale = await Locale.service.create(ctx.req.company.id, parsed.data)

        return ctx.json<Http.Success<Entity.Locale>>({ body: locale, status: 'success', statusCode: 200 })
    }

    @Delete('/:locale')
    @Protected()
    public static async deleteLocale(ctx: Hono.Context<Hono.Env, '/:locale', {}>) {
        if (!ctx.req.company)
            return ctx.json<Http.Failed>({ message: 'Company not found', status: 'failed', statusCode: 404 })

        const localeId = ctx.req.param('locale')

        const locale = await Locale.service.remove(ctx.req.company.id, localeId)

        if (!locale) return ctx.json<Http.Failed>({ message: 'Locale not found', status: 'failed', statusCode: 404 })

        return ctx.json<Http.Success<null>>({ body: null, status: 'success', statusCode: 204 })
    }
}
