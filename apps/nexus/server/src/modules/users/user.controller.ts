import UserRepository from './user.repository'
import UserService from './user.service'

@Controller('/users')
export default abstract class User {
    public static readonly router = new Hono()
    public static readonly service = UserService
    public static readonly repository = UserRepository

    @Get('/')
    @Protected()
    public static async getAll(ctx: Hono.Context<Hono.Env, '/', {}>) {
        const users = await User.service.findAll()

        return ctx.json<Http.Success<Entity.User[]>>({ status: Http.Status.SUCCESS, statusCode: 200, body: users })
    }

    @Get('/companies')
    @Protected()
    public static async getCompanies(ctx: Hono.Context<Hono.Env, '/companies', {}>) {
        if (!ctx.req.user)
            return ctx.json<Http.Failed>({ status: Http.Status.FAILED, statusCode: 401, message: 'Unauthorized' }, 401)

        const { id } = ctx.req.user

        const companies = await Company.service.findByUserId(id)

        return ctx.json<Http.Success<Entity.Company[]>>({
            status: Http.Status.SUCCESS,
            statusCode: 200,
            body: companies
        })
    }

    public static routes() {
        return this.router
    }
}
