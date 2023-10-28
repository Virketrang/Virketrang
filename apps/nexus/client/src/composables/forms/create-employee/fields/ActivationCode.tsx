import { $createEmployee } from '@/nexus/client/stores'

const ActivationCode = () => {
    const createEmployee = useStore($createEmployee)
    return (
        <Field column="span-all" row={2}>
            <Label htmlFor="activationCode" required>
                Aktiveringskode
            </Label>
            <Input name="activationCode" stretch />
        </Field>
    )
}

export default ActivationCode
