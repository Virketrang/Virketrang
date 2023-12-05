import { component$ } from '@builder.io/qwik'
import Layout from '../layout/layout.component'

const Footer = component$(({ ...props }: Resolut.Component.FooterProps) => {
    return (
        <Layout tag="footer" element="footer" {...props}>
            <Slot />
        </Layout>
    )
})

export default Footer
