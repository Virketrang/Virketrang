import Heading from './heading.component'

const Story: Storybook.Meta<HTMLHeadingElement, Resolut.Component.HeadingProps> = {
    title: 'Heading',
    component: Heading,
    argTypes: {}
}

const Template: Storybook.StoryFn<HTMLHeadingElement, Resolut.Component.HeadingProps> = ({ ...props }) => (
    <Heading {...props} />
)

export const DefaultHeading: Storybook.AnnotatedStoryFn<Storybook.Renderer, Resolut.Component.HeadingProps> =
    Template.bind({})

DefaultHeading.args = {
    children: 'E-mail'
}

export default Story
