import Layout from '../layout/layout.component'
import ArticleComponent from './article.component.types'

const Article: ArticleComponent = memo(
    forwardRef(({ children, ...props }, ref) => {
        return createElement(Layout, { ...props, ref, element: 'article' }, children)
    })
)

export default Article
