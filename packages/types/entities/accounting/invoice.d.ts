interface Invoice extends Workspace.Entity.BaseEntity {}

declare namespace Invoice {
    type Create = Omit<Invoice, keyof Workspace.Entity.BaseEntity>

    type Update = Partial<Create>
}

export default Invoice
