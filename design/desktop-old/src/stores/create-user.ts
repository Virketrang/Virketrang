export default new Nanostore('create_user', {
    invite_code: '',
    user: {
        email: '',
        password: '',
        profile: {
            firstname: '',
            lastname: '',
            gender: '',
            birthdate: ''
        },
        contact_info: {
            address: {
                street_name: '',
                street_number: '',
                apartment: '',
                postal_code: '',
                city: '',
                country: ''
            },
            phone_number: {
                country_code: '',
                subscriber_number: ''
            }
        },
        bank_account: {
            account_number: '',
            registration_number: '',
            swift_code: '',
            iban: ''
        }
    }
})
