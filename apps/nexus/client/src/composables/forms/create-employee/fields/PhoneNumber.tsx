import { $createEmployee } from '@/nexus/client/stores'

const PhoneNumber = () => {
    const createEmployee = useStore($createEmployee)
    return (
        <Field column="span-all" row={2}>
            <Label htmlFor="phoneNumber" required>
                Privat telefonnummer
            </Label>
            <Input
                value={createEmployee.phoneNumber}
                onChange={(event) => $createEmployee.set({ ...createEmployee, phoneNumber: event.target.value })}
                name="phoneNumber"
                stretch
            />
        </Field>
    )
}

export default PhoneNumber
