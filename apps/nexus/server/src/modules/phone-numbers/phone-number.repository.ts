export default abstract class PhoneNumberRepository {
    public static async insert({
        country_code,
        subscriber_number
    }: Entity.PhoneNumber.Insert): Promise<Entity.PhoneNumber> {
        const result = await Database.sql<
            Entity.PhoneNumber[]
        >`INSERT INTO phone_numbers (country_code, subscriber_number) VALUES (${country_code}, ${subscriber_number}) RETURNING *;`

        return result[0]
    }
}
