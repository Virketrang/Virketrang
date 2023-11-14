import UserRepository from './user.repository'
import UserService from './user.service'

export default abstract class User {
    public static readonly router = new Hono()
    public static readonly service = UserService
    public static readonly repository = UserRepository

    public static routes() {
        this.router.post(
            '/:company',
            validator('json', (value) => Validation.User.safeParse(value)),
            (ctx) => {
                const companyId = ctx.req.param('company')
                const parsed = ctx.req.valid('json')

                if (!parsed.success)
                    return ctx.json<Http.Failed>(
                        { status: Http.Status.FAILED, statusCode: 400, message: parsed.error.message },
                        400
                    )

                const user = this.service.create(companyId, parsed.data)

                return ctx.json(user)
            }
        )

        this.router.get('/', (c) => {
            return c.json({ message: 'Users retrieved' })
        })

        this.router.get('/:id', (c) => {
            return c.text('User retrieved')
        })

        this.router.put('/:id', (c) => {
            return c.text('Users updated')
        })

        this.router.delete('/:id', (c) => {
            return c.text('Users deleted')
        })

        return this.router
    }
}
