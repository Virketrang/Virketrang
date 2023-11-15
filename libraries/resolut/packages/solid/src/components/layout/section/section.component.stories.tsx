import Section from './section.component'

const Story: Storybook.Meta<HTMLElement, Resolut.Component.SectionProps> = {
    title: 'Section',
    component: Section,
    argTypes: {}
}

const Template: Storybook.StoryFn<HTMLElement, Resolut.Component.SectionProps> = ({ ...props }) => (
    <Section {...props} />
)

export const DefaultSection: Storybook.AnnotatedStoryFn<Storybook.Renderer, Resolut.Component.SectionProps> =
    Template.bind({})

DefaultSection.args = {
    children: 'E-mail'
}

export default Story
