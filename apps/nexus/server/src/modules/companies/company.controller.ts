import CompanyRepository from './company.repository'
import CompanyService from './company.service'

export default abstract class Company {
    public static readonly router = new Hono()
    public static readonly service = CompanyService
    public static readonly repository = CompanyRepository

    public static routes() {
        // @POST : Create a new company
        this.router.post(
            '/',
            validator('json', (value) => Validation.Company.safeParse(value)),
            async (ctx) => {
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

                const company = await this.service.create(parsed.data)

                return ctx.json<Http.Success<Entity.Company>>(
                    { status: Http.Status.SUCCESS, statusCode: 201, body: company },
                    201
                )
            }
        )

        // @GET : Retrieve all companies
        this.router.get('/', async (ctx) => {
            const companies = await this.service.findAll()

            return ctx.json<Http.Success<Entity.Company[]>>(
                { status: Http.Status.SUCCESS, statusCode: 200, body: companies },
                200
            )
        })

        // @GET : Retrieve a company by id
        this.router.get('/:id', async (ctx) => {
            const id = ctx.req.param('id')

            const company = await this.service.findById(id)

            return ctx.json<Http.Success<Entity.Company>>(
                { status: Http.Status.SUCCESS, statusCode: 200, body: company },
                200
            )
        })

        // @PUT : Update a company by id
        this.router.put('/:id', (c) => {
            return c.text('Companies updated')
        })

        // @DELETE : Delete a company by id
        this.router.delete('/:id', (c) => {
            return c.text('Companies deleted')
        })

        return this.router
    }
}
