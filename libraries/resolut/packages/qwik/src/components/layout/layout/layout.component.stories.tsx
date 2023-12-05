import Layout from './layout.component'

const Story: Storybook.Meta<Resolut.Component.LayoutProps> = {
    title: 'Layout',
    component: Layout,
    argTypes: {}
}

const Template: Storybook.StoryFn<Resolut.Component.LayoutProps> = ({ ...props }: Resolut.Component.LayoutProps) => (
    <Layout {...props} />
)

export const DefaultLayout: Storybook.AnnotatedStoryFn<Storybook.Renderer, Resolut.Component.LayoutProps> =
    Template.bind({})

DefaultLayout.args = {
    tag: 'layout',
    element: 'form',
    children: 'Layout',
    margin: '4rem',
    padding: '4rem'
} as Resolut.Component.LayoutProps

export default Story
