import Heading from './heading.component'
import { HeadingComponent, HeadingProps, HeadingRef } from './heading.component.types'

const Story: Storybook.Meta<HeadingComponent> = {
    title: 'Heading',
    component: Heading,
    argTypes: {}
}

const Template: Storybook.StoryFn<HeadingComponent> = ({ ...props }) => <Heading {...props} />

export const DefaultHeading: Storybook.AnnotatedStoryFn<Storybook.ReactRenderer, HeadingProps & HeadingRef> =
    Template.bind({})

DefaultHeading.args = {
    children: 'E-mail'
}

export default Story
