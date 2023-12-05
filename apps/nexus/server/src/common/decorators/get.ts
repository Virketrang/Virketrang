export default function Get(path: string) {
    return function (target: typeof HonoController, propertyKey: string, descriptor: PropertyDescriptor) {
        const middleware: Hono.MiddlewareHandler[] = []

        if (descriptor.protected) middleware.push(descriptor.protected)
        if (descriptor.validator) middleware.push(descriptor.validator)

        if (middleware.length > 0) target.router.get(path, ...middleware, descriptor.value)
        else target.router.get(path, descriptor.value)
    }
}
