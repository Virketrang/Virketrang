interface Locale extends Entity.BaseEntity {
    language: Entity.Language
    currency: Entity.Currency
}

declare namespace Locale {
    interface Create {
        language_id: string
        currency_id: string
    }

    interface Insert {
        language_id: string
        currency_id: string
        company_id: string
    }

    interface Delete {
        locale_id: string
        company_id: string
    }

    type Update = Partial<Create>
}

export default Locale
