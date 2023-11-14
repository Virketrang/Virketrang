interface Order extends Entity.BaseEntity {
    completed?: boolean
    customer: Entity.Customer
}

declare namespace Order {
    type Create = Omit<Order, keyof Entity.BaseEntity>

    type Update = Partial<Create>
}

export default Order
