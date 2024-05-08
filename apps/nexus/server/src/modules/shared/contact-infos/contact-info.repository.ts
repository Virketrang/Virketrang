export default abstract class ContactInfoRepository {
    public static async insert({ address_id, phone_number_id }: Entity.ContactInfo.Insert) {
        const result =
            await Database.sql`INSERT INTO contact_infos ( address_id, phone_number_id) VALUES (${address_id}, ${phone_number_id}) RETURNING *;`

        return result[0]
    }

    public static async selectByEmail(email: string) {
        const result = await Database.sql<Entity.ContactInfo[]>`SELECT * FROM contact_infos WHERE email = ${email};`

        return result[0]
    }
}
