export type ArticleProps = Resolut.Component.Props.Layout<'article'> & {}

export type ArticleRef = React.RefAttributes<HTMLElement>

export type ArticleComponent = React.MemoExoticComponent<React.ForwardRefExoticComponent<ArticleProps & ArticleRef>>

export default ArticleComponent
