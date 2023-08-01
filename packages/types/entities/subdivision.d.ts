interface Subdivision extends Workspace.Entity.BaseEntity {
    name: Workspace.I18N.Text
    division: Workspace.Entity.Division
    products?: Workspace.Entity.Product[]
}

namespace Subdivision {
    type Create = Omit<Subdivision, 'id'>

    type Update = Partial<Create>
}

export default Subdivision
