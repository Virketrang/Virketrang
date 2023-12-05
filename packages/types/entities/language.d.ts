interface Language extends Entity.BaseEntity {
    language_name: string
    language_code: string
}

declare namespace Language {
    interface Create {
        language_name: string
        language_code: string
    }

    interface Insert {
        language_name: string
        language_code: string
        company_id: string
    }

    type Update = Partial<Create>
}

export default Language
