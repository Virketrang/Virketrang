interface PayPeriod extends Workspace.Entity.BaseEntity {
    startDate: Date
    endDate: Date
    productionUnit: Workspace.Entity.ProductionUnit
}

declare namespace PayPeriod {
    type Create = Omit<PayPeriod, keyof Workspace.Entity.BaseEntity>

    type Update = Partial<Create>
}

export default PayPeriod
