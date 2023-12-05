import Body from './body.component'

const Story: Storybook.Meta<Resolut.Component.BodyProps> = {
    title: 'Body',
    component: Body,
    argTypes: {}
}

const Template: Storybook.StoryFn<Resolut.Component.BodyProps> = ({ ...props }: Resolut.Component.BodyProps) => (
    <Body {...props} />
)

export const DefaultBody: Storybook.AnnotatedStoryFn<Storybook.Renderer, Resolut.Component.BodyProps> = Template.bind(
    {}
)

DefaultBody.args = {} as Resolut.Component.BodyProps

export default Story
