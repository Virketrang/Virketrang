import Section from './section.component'

const Story: Storybook.Meta<Resolut.Component.SectionProps> = {
    title: 'Section',
    component: Section,
    argTypes: {}
}

const Template: Storybook.StoryFn<Resolut.Component.SectionProps> = ({ ...props }: Resolut.Component.SectionProps) => (
    <Section {...props} />
)

export const DefaultSection: Storybook.AnnotatedStoryFn<Storybook.Renderer, Resolut.Component.SectionProps> =
    Template.bind({})

DefaultSection.args = {
    children: 'E-mail'
} as Resolut.Component.SectionProps

export default Story
