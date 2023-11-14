interface Customer extends Entity.BaseEntity {
    type: Enum.CUSTOMER_TYPE
    orders: Entity.Order[]
}

declare namespace Customer {
    type Create = Omit<Customer, keyof Entity.BaseEntity>

    type Update = Partial<Create>
}

export default Customer
