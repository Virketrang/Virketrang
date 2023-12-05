import { component$ } from '@builder.io/qwik'
import Layout from '../layout/layout.component'

const Body = component$(({ ...props }) => {
    return (
        <Layout {...props} element="body" tag="body">
            <Slot />
        </Layout>
    )
})

export default Body
