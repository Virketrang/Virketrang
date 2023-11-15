import Body from './body.component'

const Story: Storybook.Meta<HTMLBodyElement, Resolut.Component.BodyProps> = {
    title: 'Body',
    component: Body,
    argTypes: {}
}

const Template: Storybook.StoryFn<HTMLBodyElement, Resolut.Component.BodyProps> = ({ ...props }) => <Body {...props} />

export const DefaultBody: Storybook.AnnotatedStoryFn<Storybook.Renderer, Resolut.Component.BodyProps> = Template.bind(
    {}
)

DefaultBody.args = {}

export default Story
