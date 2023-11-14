import 'dotenv/config'

const app = new Hono().basePath('/api')

app.route('/companies', Company.routes())
app.route('/users', User.routes())

app.get('/', (c) => {
    return c.json({ message: 'THE API IS RUNNING' })
})

serve({ fetch: app.fetch, port: Constants.PORT })

console.log(`Server running at ${Constants.HOST}:${Constants.PORT}`)
