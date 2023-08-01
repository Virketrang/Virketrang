interface Division extends Workspace.Entity.BaseEntity {
    name: Workspace.I18N.Text
    subdivisions?: Workspace.Entity.Subdivision[]
    categories: Enums.PRODUCT_CATEGORY[]
}

namespace Division {
    type Create = Omit<Division, 'id'>

    type Update = Partial<Create>
}

export default Division
