import { component$ } from '@builder.io/qwik'
import { Layout } from '..'

export default component$(({ ...props }: Resolut.Component.HeaderProps) => {
    return (
        <Layout element="header" tag="header" {...props}>
            <Slot />
        </Layout>
    )
})
