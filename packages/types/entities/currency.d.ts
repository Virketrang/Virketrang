interface Currency extends Entity.BaseEntity {
    currency_name: string
    currency_code: string
    currency_symbol: string
}

declare namespace Currency {
    interface Create {
        currency_name: string
        currency_code: string
        currency_symbol: string
    }

    interface Insert {
        currency_name: string
        currency_code: string
        currency_symbol: string
        company_id: string
    }

    type Update = Partial<Create>
}

export default Currency
