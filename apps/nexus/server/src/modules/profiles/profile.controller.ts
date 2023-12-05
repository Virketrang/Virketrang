import ProfileRepository from './profile.repository'
import ProfileService from './profile.service'

@Controller('/profiles')
export default abstract class Profile {
    public static repository = ProfileRepository
    public static service = ProfileService
    public static readonly router = new Hono()

    public static routes() {}
}
