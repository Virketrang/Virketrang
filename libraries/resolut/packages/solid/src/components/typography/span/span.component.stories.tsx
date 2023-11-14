import Span from './span.component'
import { SpanComponent, SpanProps, SpanRef } from './span.component.types'

const Story: Storybook.Meta<SpanComponent> = {
    title: 'Span',
    component: Span,
    argTypes: {}
}

const Template: Storybook.StoryFn<SpanComponent> = ({ ...props }) => <Span {...props} />

export const DefaultSpan: Storybook.AnnotatedStoryFn<Storybook.ReactRenderer, SpanProps & SpanRef> = Template.bind({})

DefaultSpan.args = {
    children: 'E-mail'
}

export default Story
