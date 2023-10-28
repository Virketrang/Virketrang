import { $createEmployee } from '@/nexus/client/stores'

const StreetName = () => {
    const createEmployee = useStore($createEmployee)
    return (
        <Field column="1 / 4" row={1}>
            <Label htmlFor="streetName" required>
                Gadenavn
            </Label>
            <Input
                value={createEmployee.streetName}
                onChange={(event) => $createEmployee.set({ ...createEmployee, streetName: event.target.value })}
                name="streetName"
                stretch
            />
        </Field>
    )
}

export default StreetName
