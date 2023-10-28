import { $createEmployee } from '@/nexus/client/stores'

type EmailComponent = () => JSX.Element

const Email: EmailComponent = () => {
    const createEmployee = useStore($createEmployee)
    return (
        <Field column="span-all" row={1}>
            <Label htmlFor="email" required>
                Privat e-mail
            </Label>
            <Input
                value={createEmployee.email}
                onChange={(event) => $createEmployee.set({ ...createEmployee, email: event.target.value })}
                name="email"
                stretch
            />
        </Field>
    )
}

export default Email
