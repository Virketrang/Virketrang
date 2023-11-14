import Base from './base.component'
import { BaseComponent, BaseProps } from './base.component.types'

const Story: Storybook.Meta<BaseComponent> = {
    title: 'Base',
    component: Base,
    argTypes: {}
}

const Template: Storybook.StoryFn<BaseComponent> = ({ ...props }) => <Base {...props} />

export const DefaultBase: Storybook.AnnotatedStoryFn<Storybook.ReactRenderer, BaseProps> = Template.bind({})

DefaultBase.args = {
    element: 'div'
}

export default Story
