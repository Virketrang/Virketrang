interface CreditNote extends Workspace.Entity.BaseEntity {}

declare namespace CreditNote {
    type Create = Omit<CreditNote, keyof Workspace.Entity.BaseEntity | 'product'>

    type Update = Partial<Create>
}

export default CreditNote
