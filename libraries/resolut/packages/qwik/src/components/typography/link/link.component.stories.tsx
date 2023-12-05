import Link from './link.component'

const Story: Storybook.Meta<Resolut.Component.LinkProps> = {
    title: 'Link',
    component: Link,
    argTypes: {}
}

const Template: Storybook.StoryFn<Resolut.Component.LinkProps> = ({ ...props }: Resolut.Component.LinkProps) => (
    <Link {...props} />
)

export const DefaultLink: Storybook.AnnotatedStoryFn<Storybook.Renderer, Resolut.Component.LinkProps> = Template.bind(
    {}
)

DefaultLink.args = {} as Resolut.Component.LinkProps

export default Story
