import ProductRepository from './product.repository'
import ProductService from './product.service'

@Controller('/products')
export default abstract class Product {
    public static router = new Hono()
    public static repository: ProductRepository
    public static service: ProductService

    public static routes() {
        this.router.post(
            '/',
            validator('json', (value) => Validation.Product.create.safeParse(value)),
            (ctx) => {
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

                const { data } = parsed

                return ctx.json({ message: 'Hello World' })
            }
        )

        return this.router
    }
}
