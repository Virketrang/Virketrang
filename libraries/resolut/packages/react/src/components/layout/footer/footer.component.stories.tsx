import Footer from './footer.component'

const Story: Storybook.Meta<HTMLElement, Resolut.Component.FooterProps> = {
    title: 'Footer',
    component: Footer,
    argTypes: {}
}

const Template: Storybook.StoryFn<HTMLElement, Resolut.Component.FooterProps> = ({ ...props }) => <Footer {...props} />

export const DefaultFooter: Storybook.AnnotatedStoryFn<Storybook.Renderer, Resolut.Component.FooterProps> =
    Template.bind({})

DefaultFooter.args = {
    children: 'E-mail'
}

export default Story
