import Body from './body.component'
import { BodyComponent, BodyProps, BodyRef } from './body.component.types'

const Story: Storybook.Meta<BodyComponent> = {
    title: 'Body',
    component: Body,
    argTypes: {}
}

const Template: Storybook.StoryFn<BodyComponent> = ({ ...props }) => <Body {...props} />

export const DefaultBody: Storybook.AnnotatedStoryFn<Storybook.ReactRenderer, BodyProps & BodyRef> = Template.bind({})

DefaultBody.args = {}

export default Story
