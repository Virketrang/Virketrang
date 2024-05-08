export default abstract class ProfileRepository {
    public static async insert({
        firstname,
        lastname,
        birthdate,
        gender
    }: Entity.Profile.Insert): Promise<Entity.Profile> {
        const result = await Database.sql<
            Entity.Profile[]
        >`INSERT INTO profiles (firstname, lastname, birthdate, gender) VALUES (${firstname}, ${lastname}, ${birthdate}, ${gender}) RETURNING *;`

        return result[0]
    }
}
