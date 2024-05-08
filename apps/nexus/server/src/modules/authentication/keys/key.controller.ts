import KeyRepository from './key.repository'
import KeyService from './key.service'
import KeyValidation from './key.validation'

@Controller('/keys')
export default abstract class Key {
    public static readonly router = new Hono()
    public static readonly service = KeyService
    public static readonly repository = KeyRepository
    public static readonly validation = KeyValidation

    @Post('/')
    @Protected()
    @Validator('json', (value) => Key.validation.create.safeParse(value))
    public static async create(ctx: Hono.Context<Hono.Env, '/', JSON.Body<Entity.ApiKey.Create>>) {
        const parsed = ctx.req.valid('json')

        if (!parsed.success)
            return ctx.json<Http.Failed>({ message: parsed.error.issues, status: 'failed', statusCode: 400 })

        if (!ctx.req.company)
            return ctx.json<Http.Failed>({ message: 'Company not found', status: 'failed', statusCode: 404 })

        const key = await Key.service.create(ctx.req.company.id, parsed.data)

        return ctx.json<Http.Success<Entity.ApiKey>>({ body: key, status: 'success', statusCode: 200 })
    }

    @Get('/')
    @Protected()
    public static async read(ctx: Hono.Context<Hono.Env, '/', {}>) {
        if (!ctx.req.company)
            return ctx.json<Http.Failed>({ message: 'Company not found', status: 'failed', statusCode: 404 })

        const keys = await Key.service.findAll(ctx.req.company.id)

        return ctx.json<Http.Success<Entity.ApiKey[]>>({ body: keys, status: 'success', statusCode: 200 })
    }
}
