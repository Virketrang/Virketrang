import { component$ } from '@builder.io/qwik'
import Layout from '../layout/layout.component'

const Section = component$(({ ...props }: Resolut.Component.SectionProps) => {
    return (
        <Layout {...props} element="section" tag="section">
            <Slot />
        </Layout>
    )
})

export default Section
