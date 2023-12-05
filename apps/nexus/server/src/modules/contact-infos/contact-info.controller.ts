import ContactInfoRepository from './contact-info.repository'
import ContactInfoService from './contact-info.service'

@Controller('/contact-infos')
export default abstract class ContactInfo {
    public static repository = ContactInfoRepository
    public static service = ContactInfoService
    public static readonly router = new Hono()

    public static routes() {}
}
