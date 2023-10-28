import { $createEmployee } from '@/nexus/client/stores'

const AccountNumber = () => {
    const createEmployee = useStore($createEmployee)
    return (
        <Field column="2 / 5" row={1}>
            <Label htmlFor="accountNumber" required>
                Kontonummer
            </Label>
            <Input
                value={createEmployee.accountNumber}
                onChange={(event) => $createEmployee.set({ ...createEmployee, accountNumber: event.target.value })}
                name="accountNumber"
                stretch
            />
        </Field>
    )
}

export default AccountNumber
