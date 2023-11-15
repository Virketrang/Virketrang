import Paragraph from './paragraph.component'

const Story: Storybook.Meta<HTMLParagraphElement, Resolut.Component.ParagraphProps> = {
    title: 'Paragraph',
    component: Paragraph,
    argTypes: {}
}

const Template: Storybook.StoryFn<HTMLParagraphElement, Resolut.Component.ParagraphProps> = ({ ...props }) => (
    <Paragraph {...props} />
)

export const DefaultParagraph: Storybook.AnnotatedStoryFn<Storybook.Renderer, Resolut.Component.ParagraphProps> =
    Template.bind({})

DefaultParagraph.args = {
    children: 'E-mail'
}

export default Story
