interface Order extends Workspace.Entity.BaseEntity {
    completed?: boolean
    customer: Workspace.Entity.Customer
}

declare namespace Order {
    type Create = Omit<Order, keyof Workspace.Entity.BaseEntity>

    type Update = Partial<Create>
}

export default Order
