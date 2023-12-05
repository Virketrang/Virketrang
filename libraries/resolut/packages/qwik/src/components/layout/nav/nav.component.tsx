import { component$ } from '@builder.io/qwik'
import Layout from '../layout/layout.component'

const Nav = component$(({ ...props }: Resolut.Component.NavProps) => {
    return (
        <Layout tag="nav" element="nav" {...props}>
            <Slot />
        </Layout>
    )
})

export default Nav
