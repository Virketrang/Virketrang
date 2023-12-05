export default abstract class ContactInfoService {
    public static async create({ address, phone_number }: Entity.ContactInfo.Create) {
        const { id: address_id } = await Address.service.create(address)
        const { id: phone_number_id } = await PhoneNumber.service.create(phone_number)

        const contactInfo = await ContactInfo.repository.insert({ address_id, phone_number_id })

        return contactInfo
    }
}
