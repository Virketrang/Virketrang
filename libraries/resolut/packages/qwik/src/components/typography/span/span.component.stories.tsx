import Span from './span.component'

const Story: Storybook.Meta<HTMLSpanElement, Resolut.Component.SpanProps> = {
    title: 'Span',
    component: Span,
    argTypes: {}
}

const Template: Storybook.StoryFn<HTMLSpanElement, Resolut.Component.SpanProps> = ({ ...props }) => <Span {...props} />

export const DefaultSpan: Storybook.AnnotatedStoryFn<Storybook.Renderer, Resolut.Component.SpanProps> = Template.bind(
    {}
)

DefaultSpan.args = {
    children: 'E-mail'
}

export default Story
