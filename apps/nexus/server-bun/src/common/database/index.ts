import postgres from 'postgres'

export default abstract class Database {
	public static sql = postgres({
		host: '127.0.0.1',
		port: 5432,
		database: 'virketrang',
		username: 'postgres',
		password: 'postgres'
	})

	public static async createTables() {
		const address_table = await this
			.sql`CREATE TABLE IF NOT EXISTS address (
                id UUID PRIMARY KEY DEFAULT uuid_generate_v1(), 
                street_name varchar(255),
                street_number SMALLINT,
                floor varchar(255),
                postal_code SMALLINT,
                city varchar(255),
                country varchar(255)
                );`

		console.log(address_table)
	}
}
