import { PRODUCT_CATEGORY } from '@/enums'

interface Division extends Workspace.Entity.BaseEntity {
    name: Workspace.I18N.Text
    subdivisions?: Workspace.Entity.Subdivision[]
    categories: PRODUCT_CATEGORY[]
}

declare namespace Division {
    type Create = Omit<Division, keyof Workspace.Entity.BaseEntity>

    type Update = Partial<Create>
}

export default Division
