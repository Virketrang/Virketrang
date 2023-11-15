import Layout from '../layout/layout.component'

const Article = Resolut.create<HTMLElement, Resolut.Component.ArticleProps>(
    ({ children, /** @inject ref, **/ ...props } /** @remove start **/, ref /** @remove end **/) => {
        return (
            <Layout {...props} ref={ref} element="article" tag="article">
                {children}
            </Layout>
        )
    }
)

export default Article
