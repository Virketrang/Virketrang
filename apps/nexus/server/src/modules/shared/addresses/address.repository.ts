export default abstract class AddressRepository {
    public static async insert({
        street_name,
        street_number,
        postal_code,
        apartment,
        city,
        country
    }: Entity.Address.Insert): Promise<Entity.Address> {
        const result = await Database.sql<
            Entity.Address[]
        >`INSERT INTO addresses (street_name, street_number, postal_code, apartment, city, country) VALUES (${street_name}, ${street_number}, ${postal_code}, ${
            apartment || null
        }, ${city}, ${country}) RETURNING *;`

        return result[0]
    }
}
