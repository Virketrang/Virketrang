import ContactInfoRepository from './contact-info.repository'
import ContactInfoService from './contact-info.service'
import ContactInfoValidation from './contact-info.validation'

@Controller('/contact-infos')
export default abstract class ContactInfo {
    public static repository = ContactInfoRepository
    public static service = ContactInfoService
    public static validation = ContactInfoValidation
    public static readonly router = new Hono()

    public static routes() {}
}
