import { component$ } from '@builder.io/qwik'
import Layout from '../layout/layout.component'

const Form = component$(({ onSubmit, preventDefault, ...props }: Resolut.Component.FormProps) => {
    // const handleSubmit = (event: any) => {
    //     preventDefault === true && event.preventDefault()

    //     console.log('Submitting...')

    //     onSubmit && onSubmit(event)
    // }

    return (
        <Layout tag="form" element="form" {...props}>
            <Slot />
        </Layout>
    )
})

export default Form
