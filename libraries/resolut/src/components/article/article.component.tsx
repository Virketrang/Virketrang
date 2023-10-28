import Layout from '../layout/layout.component'
import ArticleComponent from './article.component.types'

const Article: ArticleComponent = memo(
    forwardRef((props, ref) => {
        return <Layout {...props} ref={ref} component="article" />
    })
)

export default Article
