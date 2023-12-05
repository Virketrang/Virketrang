import Heading from './heading.component'

const Story: Storybook.Meta<Resolut.Component.HeadingProps> = {
    title: 'Heading',
    component: Heading,
    argTypes: {}
}

const Template: Storybook.StoryFn<Resolut.Component.HeadingProps> = ({ ...props }: Resolut.Component.HeadingProps) => (
    <Heading {...props} />
)

export const DefaultHeading: Storybook.AnnotatedStoryFn<Storybook.Renderer, Resolut.Component.HeadingProps> =
    Template.bind({})

DefaultHeading.args = {
    children: 'E-mail'
}

export default Story
