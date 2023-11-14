const $ = persistentAtom<{
    firstname: string
    surname: string
    email: string
    phoneNumber: string
    streetName: string
    streetNumber: string
    city: string
    postalCode: string
    country: string
    registrationNumber: string
    accountNumber: string
}>(
    'create_employee',
    {
        firstname: '',
        surname: '',
        email: '',
        phoneNumber: '',
        streetName: '',
        streetNumber: '',
        city: '',
        postalCode: '',
        country: 'Denmark',
        registrationNumber: '',
        accountNumber: ''
    },
    { encode: JSON.stringify, decode: JSON.parse }
)

type Keys = keyof ReturnType<typeof $.get>

export default abstract class $CreateEmployee {
    public static store = $

    public static mutate<T extends Keys>(field: T, value: ReturnType<typeof this.store.get>[T]) {
        this.store.set({ ...this.store.get(), [field]: value })
    }
}
