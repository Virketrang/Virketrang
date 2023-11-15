import Article from './article.component'

const Story: Storybook.Meta<HTMLElement, Resolut.Component.ArticleProps> = {
    title: 'Article',
    component: Article,
    argTypes: {}
}

const Template: Storybook.StoryFn<HTMLElement, Resolut.Component.ArticleProps> = ({ ...props }) => (
    <Article {...props} />
)

export const DefaultArticle: Storybook.AnnotatedStoryFn<Storybook.Renderer, Resolut.Component.ArticleProps> =
    Template.bind({})

DefaultArticle.args = {
    children: 'E-mail'
}

export default Story
