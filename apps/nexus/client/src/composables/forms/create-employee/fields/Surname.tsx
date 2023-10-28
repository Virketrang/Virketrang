import { $createEmployee } from '@/nexus/client/stores'

const Surname = () => {
    const createEmployee = useStore($createEmployee)
    return (
        <Field row={2} column="span-all">
            <Label htmlFor="surname" required>
                Efternavn
            </Label>
            <Input
                value={createEmployee.surname}
                onChange={(event) => $createEmployee.set({ ...createEmployee, surname: event.target.value })}
                name="surname"
                stretch
            />
        </Field>
    )
}

export default Surname
