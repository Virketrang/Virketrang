import { $createEmployee } from '@/nexus/client/stores'
import { mutate } from '../../../../stores/create-company'

const Firstname = () => {
    const createEmployee = useStore($createEmployee)
    return (
        <Field row={1} column="span-all">
            <Label htmlFor="firstname" required>
                Fornavn
            </Label>
            <Input
                value={createEmployee.firstname}
                onChange={(event) => $createEmployee.set({ ...createEmployee, firstname: event.target.value })}
                name="firstname"
                stretch
            />
        </Field>
    )
}

export default Firstname
