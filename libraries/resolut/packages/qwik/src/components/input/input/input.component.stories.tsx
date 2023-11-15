import Input from './input.component'

const Story: Storybook.Meta<HTMLInputElement | HTMLSelectElement, Resolut.Component.InputProps> = {
    title: 'Input',
    component: Input,
    argTypes: {}
}

const Template: Storybook.StoryFn<HTMLInputElement | HTMLSelectElement, Resolut.Component.InputProps> = ({
    ...props
}) => <Input {...props} />

export const DefaultInput: Storybook.AnnotatedStoryFn<Storybook.Renderer, Resolut.Component.InputProps> = Template.bind(
    {}
)

DefaultInput.args = {
    element: 'input',
    tag: 'input'
}

export default Story
