import Layout from '../layout/layout.component'

const Form = Resolut.create<HTMLFormElement, Resolut.Component.FormProps>(
    (
        { children, onSubmit, preventDefault, /** @inject ref, **/ ...props } /** @remove start **/,
        ref /** @remove end **/
    ) => {
        const handleSubmit = (event: Resolut.Events.SubmitEvent) => {
            preventDefault === true && event.preventDefault()

            console.log('Submitting...')

            onSubmit && onSubmit(event)
        }

        return (
            <Layout ref={ref} onSubmit={handleSubmit} tag="form" element="form" {...props}>
                {children}
            </Layout>
        )
    }
)

export default Form
