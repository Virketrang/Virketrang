import Enum from '@/enums'

const $ = persistentAtom<{
    companyName: string
    companyNumber: string
    corporateForm: Enum.CORPORATE_FORM
    owners: { firstname: string; surname: string }[]
    iteration: number
}>(
    'create_company',
    {
        companyName: '',
        companyNumber: '',
        corporateForm: Enum.CORPORATE_FORM.ENKELTMANDSVIRKSOMHED,
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

    public static addOwner() {
        this.mutate('owners', [...this.store.get().owners, { firstname: '', surname: '' }])
    }

    public static removeOwner(index: number) {
        const owners = this.store.get().owners
        owners.splice(index, 1)
        this.mutate('owners', owners)
    }

    public static mutateOwner<T extends keyof ReturnType<typeof this.store.get>['owners'][number]>(
        index: number,
        field: T,
        value: ReturnType<typeof this.store.get>['owners'][number][T]
    ) {
        const owners = this.store.get().owners
        owners[index][field] = value
        this.mutate('owners', owners)
    }
}
