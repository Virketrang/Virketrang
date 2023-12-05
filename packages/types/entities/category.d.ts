interface Category extends Entity.BaseEntity {
    unique_identifier: string
    path: string
    children: Category[] | null
    names?: { id: string; value: string; locale_id: string; created_at: Date; updated_at: Date }[]
}

declare namespace Category {
    interface Create {
        unique_identifier: string
        parent_id?: string
        names?: { value: string; locale_id: string }[]
    }

    interface Insert {
        unique_identifier: string
        path: string
        company_id: string
    }

    type Update = Partial<Create>
}

export default Category
