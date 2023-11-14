interface Invoice extends Entity.BaseEntity {}

declare namespace Invoice {
    type Create = Omit<Invoice, keyof Entity.BaseEntity>

    type Update = Partial<Create>
}

export default Invoice
