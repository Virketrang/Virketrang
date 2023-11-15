import Main from './main.component'

const Story: Storybook.Meta<HTMLElement, Resolut.Component.MainProps> = {
    title: 'Main',
    component: Main,
    argTypes: {}
}

const Template: Storybook.StoryFn<HTMLElement, Resolut.Component.MainProps> = ({ ...props }) => <Main {...props} />

export const DefaultMain: Storybook.AnnotatedStoryFn<Storybook.Renderer, Resolut.Component.MainProps> = Template.bind(
    {}
)

DefaultMain.args = {}

export default Story
