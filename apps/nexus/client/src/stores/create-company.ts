import Enum from '@/enums'

export default persistentAtom<{
    company_name: string
    company_number: string
    corporate_form: Enum.CORPORATE_FORM
    accounting_class: Enum.ACCOUNTING_CLASS
    employer: Primitive.Boolean.ToString
    phone_number: {
        country_code: string
        subscriber_number: string
    }
    address: {
        street_name: string
        street_number: string
        postal_code: string
        apartment: string
        city: string
        country: string
    }
    bank_account: {
        registration_number: string
        account_number: string
        iban: string
        swift_code: string
    }
    production_units: {
        unit_number: string
        primary_location: Primitive.Boolean.ToString
        address: {
            street_name: string
            street_number: string
            postal_code: string
            apartment: string
            city: string
            country: string
        }
    }[]
}>(
    'create_company',
    {
        company_name: '',
        company_number: '',
        corporate_form: Enum.CORPORATE_FORM.ENKELTMANDSVIRKSOMHED,
        accounting_class: Enum.ACCOUNTING_CLASS.A,
        employer: 'true' as Primitive.Boolean.ToString,
        phone_number: {
            country_code: '',
            subscriber_number: ''
        },
        address: {
            street_name: '',
            street_number: '',
            postal_code: '',
            apartment: '',
            city: '',
            country: 'denmark'
        },
        bank_account: {
            registration_number: '',
            account_number: '',
            iban: '',
            swift_code: ''
        },
        production_units: [
            {
                unit_number: '',
                primary_location: 'true',
                address: {
                    street_name: '',
                    street_number: '',
                    postal_code: '',
                    apartment: '',
                    city: '',
                    country: 'denmark'
                }
            }
        ]
    },
    { encode: JSON.stringify, decode: JSON.parse }
)
