interface Address extends Entity.BaseEntity {
    street_name: string

    street_number: number

    apartment?: string

    postal_code: number

    city: string

    country: string
}

declare namespace Address {
    type Create = Omit<Address, keyof Entity.BaseEntity>

    type Insert = Create

    type Update = Partial<Create>
}

export default Address
