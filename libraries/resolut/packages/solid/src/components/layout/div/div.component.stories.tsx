import Div from './div.component'
import { DivComponent, DivProps, DivRef } from './div.component.types'

const Story: Storybook.Meta<DivComponent> = {
    title: 'Div',
    component: Div,
    argTypes: {}
}

const Template: Storybook.StoryFn<DivComponent> = ({ ...props }) => <Div {...props} />

export const DefaultDiv: Storybook.AnnotatedStoryFn<Storybook.ReactRenderer, DivProps & DivRef> = Template.bind({})

DefaultDiv.args = {
    children: 'E-mail'
}

export default Story
