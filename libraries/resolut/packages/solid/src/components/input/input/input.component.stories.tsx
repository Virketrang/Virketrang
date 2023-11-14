import Input from './input.component'
import { InputComponent, InputProps, InputRef } from './input.component.types'

const Story: Storybook.Meta<InputComponent> = {
    title: 'Input',
    component: Input,
    argTypes: {}
}

const Template: Storybook.StoryFn<InputComponent> = ({ ...props }) => <Input {...props} />

export const DefaultInput: Storybook.AnnotatedStoryFn<Storybook.ReactRenderer, InputProps & InputRef> = Template.bind(
    {}
)

DefaultInput.args = {
    element: 'input',
    tag: 'input'
}

export default Story
