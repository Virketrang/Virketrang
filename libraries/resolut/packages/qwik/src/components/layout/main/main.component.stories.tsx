import Main from './main.component'

const Story: Storybook.Meta<Resolut.Component.MainProps> = {
    title: 'Main',
    component: Main,
    argTypes: {}
}

const Template: Storybook.StoryFn<Resolut.Component.MainProps> = ({ ...props }: Resolut.Component.MainProps) => (
    <Main {...props} />
)

export const DefaultMain: Storybook.AnnotatedStoryFn<Storybook.Renderer, Resolut.Component.MainProps> = Template.bind(
    {}
)

DefaultMain.args = {} as Resolut.Component.MainProps

export default Story
