const user = {
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
                city: ''
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
}

function flattenObject(object) {
    const flattenedObject = {}

    function traverseNestedObject(object) {
        Object.keys(object).forEach((key) => {
            const _key = key
            const value = object[_key]

            if (typeof value === 'object' && value !== null) {
                traverseNestedObject(value)
            } else {
                flattenedObject[_key] = value
            }
        })
    }

    traverseNestedObject(object)

    return flattenedObject
}

console.log(flattenObject(user))
