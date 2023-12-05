import Header from './header.component'

const Story: Storybook.Meta<HTMLElement, Resolut.Component.HeaderProps> = {
    title: 'Header',
    component: Header,
    argTypes: {}
}

const Template: Storybook.StoryFn<HTMLElement, Resolut.Component.HeaderProps> = ({ ...props }) => <Header {...props} />

export const DefaultHeader: Storybook.AnnotatedStoryFn<Storybook.Renderer, Resolut.Component.HeaderProps> =
    Template.bind({})

DefaultHeader.args = {
    children: 'E-mail'
}

export default Story
