export const router = new Hono()

export default function Controller(path: string) {
    return function (target: typeof HonoController) {
        if (target.routes) target.routes()
        router.route(path, target.router)
    }
}
