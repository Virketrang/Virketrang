import Input from './input.component'

const Story: Storybook.Meta<Resolut.Component.InputProps> = {
    title: 'Input',
    component: Input,
    argTypes: {}
}

const Template: Storybook.StoryFn<Resolut.Component.InputProps> = ({ ...props }: Resolut.Component.InputProps) => (
    <Input {...props} />
)

export const DefaultInput: Storybook.AnnotatedStoryFn<Storybook.Renderer, Resolut.Component.InputProps> = Template.bind(
    {}
)

DefaultInput.args = {
    element: 'input',
    tag: 'input'
} as Resolut.Component.InputProps

export default Story
