export default abstract class ProfileService {
    public static async create(profileInfo: Entity.Profile.Create) {
        const profile = await Profile.repository.insert(profileInfo)

        return profile
    }
}
