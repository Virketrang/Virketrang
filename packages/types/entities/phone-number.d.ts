interface PhoneNumber extends Entity.BaseEntity {
    country_code: number
    subscriber_number: number
    phone_number: string
}

declare namespace PhoneNumber {
    interface Create {
        country_code: number
        subscriber_number: number
    }

    type Insert = Create

    type Update = Partial<Create>
}

export default PhoneNumber
