const __prod__ = process.env.NODE_ENV === 'production'
const __server__ = process.env.SERVER_URL ? new URL(process.env.SERVER_URL) : new URL('http://localhost:8080')

export { __prod__, __server__ }
