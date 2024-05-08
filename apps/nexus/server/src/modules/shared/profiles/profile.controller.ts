import ProfileRepository from './profile.repository'
import ProfileService from './profile.service'
import ProfileValidation from './profile.validation'

@Controller('/profiles')
export default abstract class Profile {
    public static repository = ProfileRepository
    public static service = ProfileService
    public static readonly router = new Hono()
    public static validation = ProfileValidation

    public static routes() {}
}
