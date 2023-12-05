import CompanyRepository from './company.repository'
import CompanyService from './company.service'

@Controller('/companies')
export default abstract class Company {
    public static readonly router = new Hono()
    public static readonly service = CompanyService
    public static readonly repository = CompanyRepository

    @Get('/')
    @Protected()
    public static async getAll(ctx: Hono.Context<Hono.Env, '/', {}>) {
        const companies = await Company.service.findAll({ relations: { users: true } })

        return ctx.json<Http.Success<Entity.Company[]>>(
            { status: Http.Status.SUCCESS, statusCode: 200, body: companies },
            200
        )
    }

    @Get('/:id')
    @Protected()
    public static async getById(ctx: Hono.Context<Hono.Env, '/:id', {}>) {
        const id = ctx.req.param('id')

        const company = await Company.service.findById(id)

        return ctx.json<Http.Success<Entity.Company>>(
            { status: Http.Status.SUCCESS, statusCode: 200, body: company },
            200
        )
    }

    @Post('/')
    @Protected()
    @Validator('json', (value) => Validation.Company.create.safeParse(value))
    public static async create(ctx: Hono.Context<Hono.Env, '/', JSON.Body<Entity.Company.Create>>) {
        const parsed = ctx.req.valid('json')

        if (!parsed.success)
            return ctx.json<Http.Failed>(
                {
                    status: Http.Status.FAILED,
                    statusCode: 400,
                    message: parsed.error.issues
                },
                400
            )

        const company = await Company.service.create(parsed.data)

        if (!ctx.req.user)
            return ctx.json<Http.Failed>(
                {
                    status: Http.Status.FAILED,
                    statusCode: 401,
                    message: 'Unauthorized'
                },
                401
            )

        Company.service.asignCompanyToUser(ctx.req.user.id, company.id)

        if (!ctx.req.companies) ctx.req.companies = [company]
        else ctx.req.companies.push(company)

        const token = await Authentication.service.sign({
            user: ctx.req.user,
            companies: ctx.req.companies
        })

        setCookie(ctx, 'nexus_authentication_token', token, {
            httpOnly: true,
            path: '/',
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Strict',
            domain: process.env.NODE_ENV === 'production' ? 'nexus.com' : 'localhost'
        })

        return ctx.json<Http.Success<Entity.Company>>(
            { status: Http.Status.SUCCESS, statusCode: 201, body: company },
            201
        )
    }

    @Patch('/:id')
    @Protected()
    public static async update(ctx: Hono.Context<Hono.Env, '/:id', {}>) {
        return ctx.text('Companies updated')
    }

    @Delete('/:id')
    @Protected()
    public static async delete(ctx: Hono.Context<Hono.Env, '/:id', {}>) {
        return ctx.text('Companies deleted')
    }
}
