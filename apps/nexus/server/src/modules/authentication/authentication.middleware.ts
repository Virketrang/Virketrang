export default abstract class AuthenticationMiddleware {
    public static async isAuthenticated(ctx: Hono.Context, next: Hono.Next) {
        const authHeader = ctx.req.header('Authorization')
        const userCookie = getCookie(ctx, 'nexus_authentication_token')

        if (!authHeader && !userCookie)
            return ctx.json<Http.Failed>({ status: Http.Status.FAILED, statusCode: 401, message: 'Unauthorized' }, 401)

        const token = authHeader ? authHeader.split(' ')[1] : userCookie

        if (!token)
            return ctx.json<Http.Failed>({ status: Http.Status.FAILED, statusCode: 401, message: 'Unauthorized' }, 401)

        const decoded = await Authentication.service.verify<{ user: Entity.User; companies: Entity.Company[] }>(token)

        if (!decoded)
            return ctx.json<Http.Failed>({ status: Http.Status.FAILED, statusCode: 401, message: 'Unauthorized' }, 401)

        const { user, companies } = decoded

        if (!user)
            return ctx.json<Http.Failed>({ status: Http.Status.FAILED, statusCode: 401, message: 'Unauthorized' }, 401)

        const companyHeader = ctx.req.header('Company')
        const companyCookie = getCookie(ctx, 'nexus_company')

        const company = companyHeader ? companyHeader : companyCookie

        if (company) ctx.req.company = companies.find((c) => c.id === company)

        ctx.req.user = user
        ctx.req.companies = companies

        return next()
    }
}
