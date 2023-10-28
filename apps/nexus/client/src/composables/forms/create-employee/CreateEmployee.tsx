import { $createEmployee } from '@/nexus/client/stores'

type CreateCompanyComponent = React.FunctionComponent<{ submit?: boolean } & React.ComponentProps<'form'>>

const CreateCompany: CreateCompanyComponent = memo(({ children, submit = false, ref, ...props }) => {
    const createEmployee = useStore($createEmployee)

    const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (submit) {
            console.log(createEmployee)
        }
    }, [])

    return (
        <Form grid columns="repeat(4, 1fr)" rows="repeat(3, 1fr)" gap="2rem" {...props} onSubmit={handleSubmit}>
            {children}
        </Form>
    )
})

export default CreateCompany
