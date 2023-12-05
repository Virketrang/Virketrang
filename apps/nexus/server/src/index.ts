import './modules'

import { router } from './common/decorators/controller'

const app = new Hono().basePath('/api')

app.use('*', cors({ origin: (origin) => origin, credentials: true }))

app.route('/v1', router)

app.get('/test', (ctx) => {
    const companyHeader = ctx.req.header('X-Company-Header')
    return ctx.json({ header: companyHeader })
})

serve({ fetch: app.fetch, port: parseInt(process.env.PORT) })

console.log(`Server running at ${process.env.HOST}:${process.env.PORT}`)

export default app
