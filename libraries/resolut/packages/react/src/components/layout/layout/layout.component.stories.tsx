import Layout from './layout.component'
import { LayoutComponent, LayoutProps } from './layout.component.types'

const Story: Storybook.Meta<LayoutComponent> = {
    title: 'Layout',
    component: Layout,
    argTypes: {}
}

const Template: Storybook.StoryFn<LayoutComponent> = ({ ...props }) => <Layout {...props} />

export const DefaultLayout: Storybook.AnnotatedStoryFn<Storybook.ReactRenderer, LayoutProps> = Template.bind({})

DefaultLayout.args = {
    children: 'E-mail',
    element: 'div'
}

export default Story
