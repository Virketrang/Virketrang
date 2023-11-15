import Link from './link.component'

const Story: Storybook.Meta<HTMLAnchorElement, Resolut.Component.LinkProps> = {
    title: 'Link',
    component: Link,
    argTypes: {}
}

const Template: Storybook.StoryFn<HTMLAnchorElement, Resolut.Component.LinkProps> = ({ ...props }) => (
    <Link {...props} />
)

export const DefaultLink: Storybook.AnnotatedStoryFn<Storybook.Renderer, Resolut.Component.LinkProps> = Template.bind(
    {}
)

DefaultLink.args = {}

export default Story
