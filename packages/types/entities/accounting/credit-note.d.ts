interface CreditNote extends Entity.BaseEntity {}

declare namespace CreditNote {
    type Create = Omit<CreditNote, keyof Entity.BaseEntity | 'product'>

    type Update = Partial<Create>
}

export default CreditNote
