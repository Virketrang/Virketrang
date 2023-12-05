import Nav from './nav.component'

const Story: Storybook.Meta<HTMLElement, Resolut.Component.NavProps> = {
    title: 'Nav',
    component: Nav,
    argTypes: {}
}

const Template: Storybook.StoryFn<HTMLElement, Resolut.Component.NavProps> = ({ ...props }) => <Nav {...props} />

export const DefaultNav: Storybook.AnnotatedStoryFn<Storybook.Renderer, Resolut.Component.NavProps> = Template.bind({})

DefaultNav.args = {
    children: 'E-mail'
}

export default Story
