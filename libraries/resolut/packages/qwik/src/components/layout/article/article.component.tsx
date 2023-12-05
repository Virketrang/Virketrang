import { component$ } from '@builder.io/qwik'
import Layout from '../layout/layout.component'

const Article = component$(({ ...props }: Resolut.Component.ArticleProps) => {
    return (
        <Layout {...props} element="article" tag="article">
            <Slot />
        </Layout>
    )
})

export default Article
