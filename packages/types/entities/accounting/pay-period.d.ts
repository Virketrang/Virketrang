interface PayPeriod extends Entity.BaseEntity {
    start_date: Date
    end_date: Date
    production_unit: Entity.ProductionUnit
}

declare namespace PayPeriod {
    type Create = Omit<PayPeriod, keyof Entity.BaseEntity>

    type Update = Partial<Create>
}

export default PayPeriod
