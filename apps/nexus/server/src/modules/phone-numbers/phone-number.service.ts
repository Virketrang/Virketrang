export default abstract class PhoneNumberService {
    public static async create(phoneNumber: Entity.PhoneNumber.Create) {
        return await PhoneNumber.repository.insert(phoneNumber)
    }

    public static retrieveAll() {
        return 'PhoneNumbers retrieved'
    }

    public static retrieve() {
        return 'PhoneNumber retrieved'
    }

    public static update() {
        return 'PhoneNumber updated'
    }

    public static remove() {
        return 'PhoneNumber deleted'
    }
}
