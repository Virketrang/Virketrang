import RoleRepository from './role.repository'
import RoleService from './role.service'
import RoleValidation from './role.validation'

@Controller('/roles')
export default abstract class Role {
    public static readonly router = new Hono()
    public static readonly service = RoleService
    public static readonly repository = RoleRepository
    public static readonly validation = RoleValidation

    @Post('/')
    @Protected()
    @Validator('json', (value) => Role.validation.create.safeParse(value))
    public static async create(ctx: Hono.Context<Hono.Env, '/', JSON.Body<Entity.Role.Create>>) {
        const parsed = ctx.req.valid('json')

        if (!parsed.success)
            return ctx.json<Http.Failed>({ message: parsed.error.issues, status: 'failed', statusCode: 400 })

        if (!ctx.req.company)
            return ctx.json<Http.Failed>({ message: 'Company not found', status: 'failed', statusCode: 404 })

        const role = await Role.service.create(ctx.req.company.id, parsed.data)

        return ctx.json<Http.Success<Entity.Role>>({ body: role, status: 'success', statusCode: 200 })
    }

    @Get('/')
    @Protected()
    public static async read(ctx: Hono.Context<Hono.Env, '/', {}>) {
        console.log(ctx.req)
        console.log('FETCH')
        if (!ctx.req.company)
            return ctx.json<Http.Failed>({ message: 'Company not found', status: 'failed', statusCode: 404 })

        const roles = await Role.service.findAll(ctx.req.company.id)

        return ctx.json<Http.Success<Entity.Role[]>>({ body: roles, status: 'success', statusCode: 200 }, 200)
    }
}
