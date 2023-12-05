import Footer from './footer.component'

const Story: Storybook.Meta<Resolut.Component.FooterProps> = {
    title: 'Footer',
    component: Footer,
    argTypes: {}
}

const Template: Storybook.StoryFn<Resolut.Component.FooterProps> = ({ ...props }: Resolut.Component.FooterProps) => (
    <Footer {...props} />
)

export const DefaultFooter: Storybook.AnnotatedStoryFn<Storybook.Renderer, Resolut.Component.FooterProps> =
    Template.bind({})

DefaultFooter.args = {
    children: 'E-mail'
} as Resolut.Component.FooterProps

export default Story
