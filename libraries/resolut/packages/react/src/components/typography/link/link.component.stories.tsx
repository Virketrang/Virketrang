import Link from './link.component'
import { LinkComponent, LinkProps } from './link.component.types'

const Story: Storybook.Meta<LinkComponent> = {
    title: 'Link',
    component: Link,
    argTypes: {}
}

const Template: Storybook.StoryFn<LinkComponent> = ({ ...props }) => <Link {...props} />

export const DefaultLink: Storybook.AnnotatedStoryFn<Storybook.ReactRenderer, LinkProps> = Template.bind({})

DefaultLink.args = {}

export default Story
