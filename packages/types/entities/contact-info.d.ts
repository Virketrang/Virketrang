interface ContactInfo extends Entity.BaseEntity {
    phone_number: Entity.PhoneNumber
    address: Entity.Address
}

declare namespace ContactInfo {
    interface Create {
        phone_number: Entity.PhoneNumber.Create
        address: Entity.Address.Create
    }

    interface Insert {
        phone_number_id: string
        address_id: string
    }

    type Update = Partial<Create>
}

export default ContactInfo
