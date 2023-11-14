import Layout from '../layout/layout.component'
import FormComponent, { FormProps } from './form.component.types'

const Form: FormComponent = Resolut.create<HTMLFormElement, FormProps>(
    (
        { children, onSubmit, preventDefault = true, /** @inject ref, **/ ...props } /** @remove start **/,
        ref /** @remove end **/
    ) => {
        const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
            preventDefault && event.preventDefault()

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
