import Layout from '../layout/layout.component'

const Article = Resolut.create<HTMLElement, Resolut.Component.ArticleProps>(
    ({ children,  ref,  ...props } ) => {
        return (
            <Layout {...props} ref={ref} element="article" tag="article">
                {children}
            </Layout>
        )
    }
)

export default Article
