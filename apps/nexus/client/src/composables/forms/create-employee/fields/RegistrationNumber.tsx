import { $createEmployee } from '@/nexus/client/stores'

const RegistrationNumber = () => {
    const createEmployee = useStore($createEmployee)
    return (
        <Field column="1 / 2" row={1}>
            <Label htmlFor="registrationNumber" required>
                Reg. nr.
            </Label>
            <Input
                value={createEmployee.registrationNumber}
                onChange={(event) => $createEmployee.set({ ...createEmployee, registrationNumber: event.target.value })}
                name="registrationNumber"
                stretch
            />
        </Field>
    )
}

export default RegistrationNumber
