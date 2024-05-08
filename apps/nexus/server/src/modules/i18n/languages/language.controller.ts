import LanguageRepository from './language.repository'
import LanguageService from './language.service'
import LanguageValidation from './language.validation'

@Controller('/languages')
export default abstract class Language {
    public static readonly router = new Hono()
    public static readonly repository = LanguageRepository
    public static readonly service = LanguageService
    public static readonly validation = LanguageValidation

    @Post('/')
    @Protected()
    @Validator('json', (value) => Language.validation.create.safeParse(value))
    public static async createLanguage(ctx: Hono.Context<Hono.Env, '/', JSON.Body<Entity.Language.Create>>) {
        const parsed = ctx.req.valid('json')

        if (!parsed.success)
            return ctx.json<Http.Failed>({ status: 'failed', statusCode: 400, message: parsed.error.issues }, 400)

        if (!ctx.req.company)
            return ctx.json<Http.Failed>({ status: 'failed', statusCode: 401, message: 'Unauthorized' }, 401)

        const language = await Language.service.create(ctx.req.company.id, parsed.data)

        return ctx.json<Http.Success<Entity.Language>>({ status: 'success', statusCode: 200, body: language }, 200)
    }

    @Get('/')
    @Protected()
    public static async getAllLanguages(ctx: Hono.Context<Hono.Env, '/', {}>) {
        if (!ctx.req.company)
            return ctx.json<Http.Failed>({ status: 'failed', statusCode: 401, message: 'Unauthorized' }, 401)

        const languages = await Language.service.findAll(ctx.req.company.id)

        return ctx.json<Http.Success<Entity.Language[]>>({ status: 'success', statusCode: 200, body: languages }, 200)
    }
}
