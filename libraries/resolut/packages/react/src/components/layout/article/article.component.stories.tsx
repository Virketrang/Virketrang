import Article from './article.component'
import { ArticleComponent, ArticleProps } from './article.component.types'

const Story: Storybook.Meta<ArticleComponent> = {
    title: 'Article',
    component: Article,
    argTypes: {}
}

const Template: Storybook.StoryFn<ArticleComponent> = ({ ...props }) => <Article {...props} />

export const DefaultArticle: Storybook.AnnotatedStoryFn<Storybook.ReactRenderer, ArticleProps> = Template.bind({})

DefaultArticle.args = {
    children: 'E-mail'
}

export default Story
