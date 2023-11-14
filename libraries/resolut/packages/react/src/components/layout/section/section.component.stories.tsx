import Section from './section.component'
import { SectionComponent, SectionProps } from './section.component.types'

const Story: Storybook.Meta<SectionComponent> = {
    title: 'Section',
    component: Section,
    argTypes: {}
}

const Template: Storybook.StoryFn<SectionComponent> = ({ ...props }) => <Section {...props} />

export const DefaultSection: Storybook.AnnotatedStoryFn<Storybook.ReactRenderer, SectionProps> = Template.bind({})

DefaultSection.args = {
    children: 'E-mail'
}

export default Story
