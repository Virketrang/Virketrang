interface Subdivision extends Entity.BaseEntity {
    name: I18N.Text
    division: Entity.Division
    products?: Entity.Product[]
}

declare namespace Subdivision {
    type Create = Omit<Subdivision, keyof Entity.BaseEntity>

    type Update = Partial<Create>
}

export default Subdivision
