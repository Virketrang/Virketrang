interface Division extends Entity.BaseEntity {
    name: I18N.Text
    subdivisions?: Entity.Subdivision[]
    categories: Enum.PRODUCT_CATEGORY[]
}

declare namespace Division {
    type Create = Omit<Division, keyof Entity.BaseEntity>

    type Update = Partial<Create>
}

export default Division
