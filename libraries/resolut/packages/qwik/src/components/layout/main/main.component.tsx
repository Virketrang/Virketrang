import { component$ } from '@builder.io/qwik'
import Layout from '../layout/layout.component'

const Main = component$(({ ...props }: Resolut.Component.MainProps) => {
    return (
        <Layout {...props} element="main" tag="main">
            <Slot />
        </Layout>
    )
})

export default Main
