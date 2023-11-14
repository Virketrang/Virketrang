import Layout from '../layout/layout.component'
import ArticleComponent, { ArticleProps } from './article.component.types'

const Article: ArticleComponent = Resolut.create<HTMLElement, ArticleProps>(
    ({ children, /** @inject ref, **/ ...props } /** @remove start **/, ref /** @remove end **/) => {
        return (
            <Layout {...props} ref={ref} element="article" tag="article">
                {children}
            </Layout>
        )
    }
)

export default Article
