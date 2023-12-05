import { component$ } from '@builder.io/qwik'
import { Layout } from '..'

const List = component$(({ ...props }) => {
    return (
        <Layout tag="list" element="ul">
            <Slot />
        </Layout>
    )
})
