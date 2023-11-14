import Paragraph from './paragraph.component'
import { ParagraphComponent, ParagraphProps, ParagraphRef } from './paragraph.component.types'

const Story: Storybook.Meta<ParagraphComponent> = {
    title: 'Paragraph',
    component: Paragraph,
    argTypes: {}
}

const Template: Storybook.StoryFn<ParagraphComponent> = ({ ...props }) => <Paragraph {...props} />

export const DefaultParagraph: Storybook.AnnotatedStoryFn<Storybook.ReactRenderer, ParagraphProps & ParagraphRef> =
    Template.bind({})

DefaultParagraph.args = {
    children: 'E-mail'
}

export default Story
