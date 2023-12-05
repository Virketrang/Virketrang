import { component$ } from '@builder.io/qwik'
import Layout from '../layout/layout.component'

const Div = component$(({ ...props }: Resolut.Component.DivProps) => {
    return (
        <Layout {...props} element="div" tag="div">
            <Slot />
        </Layout>
    )
})

export default Div
