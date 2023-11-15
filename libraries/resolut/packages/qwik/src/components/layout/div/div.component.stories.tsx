import Div from './div.component'

const Story: Storybook.Meta<HTMLDivElement, Resolut.Component.DivProps> = {
    title: 'Div',
    component: Div,
    argTypes: {}
}

const Template: Storybook.StoryFn<HTMLDivElement, Resolut.Component.DivProps> = ({ ...props }) => <Div {...props} />

export const DefaultDiv: Storybook.AnnotatedStoryFn<Storybook.Renderer, Resolut.Component.DivProps> = Template.bind({})

DefaultDiv.args = {
    children: 'E-mail'
}

export default Story
