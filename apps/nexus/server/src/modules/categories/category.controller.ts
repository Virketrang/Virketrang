import CategoryRepository from './category.repository'
import CategoryService from './category.service'
import CategoryValidation from './category.validation'

@Controller('/categories')
export default abstract class Category {
    public static readonly router = new Hono()
    public static readonly repository = CategoryRepository
    public static readonly service = CategoryService
    public static readonly validation = CategoryValidation

    @Get('/')
    @Protected()
    public static async get(ctx: Hono.Context<Hono.Env, '/'>) {
        if (!ctx.req.company)
            return ctx.json<Http.Failed>({ status: 'failed', statusCode: 401, message: 'No company selected' }, 401)

        const categories = await Category.repository.selectAll(ctx.req.company.id)

        return ctx.json<Http.Success<Entity.Category[]>>({ status: 'success', statusCode: 200, body: categories }, 200)
    }

    @Post('/')
    @Protected()
    @Validator('json', (value) => Category.validation.create.safeParse(value))
    public static async create(ctx: Hono.Context<Hono.Env, '/', JSON.Body<Entity.Category.Create>>) {
        const parsed = ctx.req.valid('json')

        if (!parsed.success)
            return ctx.json<Http.Failed>({ status: 'failed', statusCode: 400, message: 'Invalid body' }, 400)

        const { parent_id, unique_identifier, names } = parsed.data

        if (!ctx.req.company)
            return ctx.json<Http.Failed>({ status: 'failed', statusCode: 401, message: 'No company selected' }, 401)

        try {
            const category = await Category.service.create(ctx.req.company.id, { parent_id, unique_identifier, names })

            return ctx.json<Http.Success<Entity.Category>>({ status: 'success', statusCode: 200, body: category }, 200)
        } catch (error) {
            let message

            if (error instanceof Error) message = error.message
            else message = String(error)

            return ctx.json<Http.Failed>({ status: 'failed', statusCode: 500, message }, 500)
        }
    }
}
