import Layout from './layout.component'

const Story: Storybook.Meta<HTMLElement, Resolut.Component.LayoutProps> = {
    title: 'Layout',
    component: Layout,
    argTypes: {}
}

const Template: Storybook.StoryFn<HTMLElement, Resolut.Component.LayoutProps> = ({ ...props }) => <Layout {...props} />

export const DefaultLayout: Storybook.AnnotatedStoryFn<Storybook.Renderer, Resolut.Component.LayoutProps> =
    Template.bind({})

DefaultLayout.args = {
    children: 'E-mail',
    element: 'div'
}

export default Story
