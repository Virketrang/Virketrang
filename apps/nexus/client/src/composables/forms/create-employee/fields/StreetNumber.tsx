import { $createEmployee } from '@/nexus/client/stores'

const StreetNumber = () => {
    const createEmployee = useStore($createEmployee)
    return (
        <Field column="4 / 5" row={1}>
            <Label htmlFor="streetNumber" required>
                Gadenummer
            </Label>
            <Input
                value={createEmployee.streetNumber}
                onChange={(event) => $createEmployee.set({ ...createEmployee, streetNumber: event.target.value })}
                name="streetNumber"
                stretch
            />
        </Field>
    )
}

export default StreetNumber
