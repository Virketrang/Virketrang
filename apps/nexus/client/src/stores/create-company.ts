import { CORPORATE_FORM } from '@/enums'

// const $ = atom<{
//     companyName: string
//     companyNumber: string
//     corporateForm: CORPORATE_FORM
//     owners: { firstname: string; surname: string }[]
//     iteration: number
// }>({
//     companyName: '',
//     companyNumber: '',
//     corporateForm: CORPORATE_FORM.ENKELTMANDSVIRKSOMHED,
//     owners: [{ firstname: '', surname: '' }],
//     iteration: 0
// })

const $ = persistentAtom<{
    companyName: string
    companyNumber: string
    corporateForm: CORPORATE_FORM
    owners: { firstname: string; surname: string }[]
    iteration: number
}>(
    'create_company',
    {
        companyName: '',
        companyNumber: '',
        corporateForm: CORPORATE_FORM.ENKELTMANDSVIRKSOMHED,
        owners: [{ firstname: '', surname: '' }],
        iteration: 0
    },
    { encode: JSON.stringify, decode: JSON.parse }
)

type Keys = keyof ReturnType<typeof $.get>

export default abstract class $CreateCompany {
    public static store = $

    public static mutate<T extends Keys>(field: T, value: ReturnType<typeof this.store.get>[T]) {
        this.store.set({ ...this.store.get(), [field]: value })
    }
}
