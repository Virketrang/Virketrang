import postgres from 'postgres'

export default abstract class Database {
    public static sql = postgres({
        host: '127.0.0.1',
        port: 5432,
        database: 'virketrang',
        username: 'postgres',
        password: 'postgres'
    })
}
