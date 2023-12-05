import Header from './header.component'

const Story: Storybook.Meta<Resolut.Component.HeaderProps> = {
    title: 'Header',
    component: Header,
    argTypes: {}
}

const Template: Storybook.StoryFn<Resolut.Component.HeaderProps> = ({ ...props }: Resolut.Component.HeaderProps) => (
    <Header {...props} />
)

export const DefaultHeader: Storybook.AnnotatedStoryFn<Storybook.Renderer, Resolut.Component.HeaderProps> =
    Template.bind({})

DefaultHeader.args = {
    tag: 'header',
    children: 'Header',
    margin: '4rem',
    padding: '4rem'
} as Resolut.Component.HeaderProps

export default Story
