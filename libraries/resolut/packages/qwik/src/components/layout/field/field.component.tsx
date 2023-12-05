import { component$ } from '@builder.io/qwik'
import Layout from '../layout/layout.component'

const Field = component$(({ message, ...props }: Resolut.Component.FieldProps) => {
    return <Layout tag="field" {...Utils.setAttributes({ message })} element="div" {...props}></Layout>
})

export default Field
