export default abstract class AddressService {
    public static async create(address: Entity.Address.Create) {
        return await Address.repository.insert(address)
    }

    public static retrieve() {
        return 'Addresses retrieved'
    }

    public static update() {
        return 'Address updated'
    }

    public static remove() {
        return 'Address deleted'
    }
}
