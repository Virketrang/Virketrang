import Main from './main.component'
import { MainComponent, MainProps } from './main.component.types'

const Story: Storybook.Meta<MainComponent> = {
    title: 'Main',
    component: Main,
    argTypes: {}
}

const Template: Storybook.StoryFn<MainComponent> = ({ ...props }) => <Main {...props} />

export const DefaultMain: Storybook.AnnotatedStoryFn<Storybook.ReactRenderer, MainProps> = Template.bind({})

DefaultMain.args = {}

export default Story
