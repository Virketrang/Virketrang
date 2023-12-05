import Article from './article.component'

const Story: Storybook.Meta<Resolut.Component.ArticleProps> = {
    title: 'Article',
    component: Article,
    argTypes: {}
}

const Template: Storybook.StoryFn<Resolut.Component.ArticleProps> = ({ ...props }: Resolut.Component.ArticleProps) => (
    <Article {...props} />
)

export const DefaultArticle: Storybook.AnnotatedStoryFn<Storybook.Renderer, Resolut.Component.ArticleProps> =
    Template.bind({})

DefaultArticle.args = {
    children: 'E-mail'
} as Resolut.Component.ArticleProps

export default Story
