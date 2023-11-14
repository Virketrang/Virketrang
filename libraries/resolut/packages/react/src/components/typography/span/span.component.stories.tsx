import Span from './span.component'
import { SpanComponent, SpanProps } from './span.component.types'

const Story: Storybook.Meta<SpanComponent> = {
    title: 'Span',
    component: Span,
    argTypes: {}
}

const Template: Storybook.StoryFn<SpanComponent> = ({ ...props }) => <Span {...props} />

export const DefaultSpan: Storybook.AnnotatedStoryFn<Storybook.ReactRenderer, SpanProps> = Template.bind({})

DefaultSpan.args = {
    children: 'E-mail'
}

export default Story
