interface Subdivision extends Workspace.Entity.BaseEntity {
    name: Workspace.I18N.Text
    division: Workspace.Entity.Division
    products?: Workspace.Entity.Product[]
}

declare namespace Subdivision {
    type Create = Omit<Subdivision, keyof Workspace.Entity.BaseEntity>

    type Update = Partial<Create>
}

export default Subdivision
