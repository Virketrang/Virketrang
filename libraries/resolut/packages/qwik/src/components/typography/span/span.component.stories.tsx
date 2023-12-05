import Span from './span.component'

const Story: Storybook.Meta<Resolut.Component.SpanProps> = {
    title: 'Span',
    component: Span,
    argTypes: {}
}

const Template: Storybook.StoryFn<Resolut.Component.SpanProps> = ({ ...props }: Resolut.Component.SpanProps) => (
    <Span {...props} />
)

export const DefaultSpan: Storybook.AnnotatedStoryFn<Storybook.Renderer, Resolut.Component.SpanProps> = Template.bind(
    {}
)

DefaultSpan.args = {
    children: 'E-mail'
} as Resolut.Component.SpanProps

export default Story
