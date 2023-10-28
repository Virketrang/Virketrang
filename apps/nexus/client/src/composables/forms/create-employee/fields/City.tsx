import { $createEmployee } from '@/nexus/client/stores'

const City = () => {
    const createEmployee = useStore($createEmployee)
    return (
        <Field column="2 / 5" row={2}>
            <Label htmlFor="city" required>
                By
            </Label>
            <Input
                value={createEmployee.city}
                onChange={(event) => $createEmployee.set({ ...createEmployee, city: event.target.value })}
                name="city"
                stretch
            />
        </Field>
    )
}

export default City
