import { $createEmployee } from '@/nexus/client/stores'

const PostalCode = () => {
    const createEmployee = useStore($createEmployee)
    return (
        <Field column="1 / 2" row={2}>
            <Label htmlFor="postalCode" required>
                Postnummer
            </Label>
            <Input
                value={createEmployee.postalCode}
                onChange={(event) => $createEmployee.set({ ...createEmployee, postalCode: event.target.value })}
                name="postalCode"
                stretch
            />
        </Field>
    )
}

export default PostalCode
