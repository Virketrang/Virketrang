import AuthenticationService from './authentication.service'
import AuthenticationMiddleware from './authentication.middleware'

@Controller('/authentication')
export default abstract class Authentication {
    public static readonly router = new Hono()
    public static readonly service = AuthenticationService
    public static readonly middleware = AuthenticationMiddleware

    @Post('/signin')
    @Validator('json', (value) => Validation.Authentication.signin.safeParse(value))
    public static async signinUser(ctx: Hono.Context<Hono.Env, '/signin', JSON.Body<Entity.Signin.User>>) {
        const parsed = ctx.req.valid('json')

        if (!parsed.success)
            return ctx.json<Http.Failed>(
                { status: Http.Status.FAILED, statusCode: 400, message: parsed.error.issues },
                400
            )

        const { email, password } = parsed.data

        const result = await User.service.findByEmail(email, { include: 'password' })

        if (!result)
            return ctx.json<Http.Failed>(
                {
                    status: Http.Status.FAILED,
                    statusCode: 401,
                    message: 'Could not find a user with that e-mail'
                },
                401
            )

        const { password: userPassword, ...user } = result

        const passwordMatch = await Authentication.service.compare(password, userPassword)

        if (!passwordMatch)
            return ctx.json<Http.Failed>(
                { status: Http.Status.FAILED, statusCode: 401, message: 'Incorrect password.' },
                401
            )

        const companies = await Company.service.findByUserId(user.id)

        const token = await Authentication.service.sign({ user, companies })

        setCookie(ctx, 'nexus_authentication_token', token, {
            httpOnly: true,
            path: '/',
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Strict',
            domain: process.env.NODE_ENV === 'production' ? 'nexus.com' : 'localhost'
        })

        return ctx.json<Http.Success<{ token: string; user: Entity.User; companies: Entity.Company[] }>>({
            status: Http.Status.SUCCESS,
            statusCode: 200,
            body: { token, user, companies: companies || [] }
        })
    }

    @Post('/signup')
    @Validator('json', (value) => Validation.Authentication.signup.safeParse(value))
    public static async signup(ctx: Hono.Context<Hono.Env, '/signup', JSON.Body<Entity.Signup>>) {
        const parsed = ctx.req.valid('json')

        if (!parsed.success)
            return ctx.json<Http.Failed>(
                { status: Http.Status.FAILED, statusCode: 400, message: parsed.error.message },
                400
            )

        const data = parsed.data

        if (data.invite_code !== process.env.INVITE_CODE)
            return ctx.json<Http.Failed>(
                { status: Http.Status.FAILED, statusCode: 400, message: 'Invalid invite code.' },
                400
            )

        const user = await User.service.create(data.user)

        const token = await Authentication.service.sign({ user, companies: [] })

        setCookie(ctx, 'nexus_authentication_token', token, {
            httpOnly: true,
            path: '/',
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Strict',
            domain: process.env.NODE_ENV === 'production' ? 'nexus.com' : 'localhost'
        })

        return ctx.json<Http.Success<{ token: string; user: Entity.User }>>({
            status: Http.Status.SUCCESS,
            statusCode: 200,
            body: { token, user }
        })
    }
}
