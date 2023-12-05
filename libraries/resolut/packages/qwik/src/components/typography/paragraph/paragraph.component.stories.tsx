import Paragraph from './paragraph.component'

const Story: Storybook.Meta<Resolut.Component.ParagraphProps> = {
    title: 'Paragraph',
    component: Paragraph,
    argTypes: {}
}

const Template: Storybook.StoryFn<Resolut.Component.ParagraphProps> = ({
    ...props
}: Resolut.Component.ParagraphProps) => <Paragraph {...props} />

export const DefaultParagraph: Storybook.AnnotatedStoryFn<Storybook.Renderer, Resolut.Component.ParagraphProps> =
    Template.bind({})

DefaultParagraph.args = {
    children: 'E-mail'
} as Resolut.Component.ParagraphProps

export default Story
