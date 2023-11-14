interface Person extends Entity.BaseEntity {
    firstname: string
    lastname: string
    name: string
    private_email: string
    address: Entity.Address
    private_phone_number: Entity.PhoneNumber
    gender: Enum.GENDER
    birth_date: Date
}

declare namespace Person {
    interface Create {
        firstname: string
        lastname: string
        private_email: string
        address: Entity.Address.Create
        private_phone_number: Entity.PhoneNumber.Create
        gender: Enum.GENDER
        birth_date: Date
    }

    interface Insert {
        firstname: string
        lastname: string
        private_email: string
        address_id: string
        private_phone_number_id: string
        gender: Enum.GENDER
        birth_date: Date
    }
}

export default Person
