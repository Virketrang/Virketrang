import Select from './select.component'

const Story: Storybook.Meta<Resolut.Component.SelectProps> = {
    title: 'Select',
    component: Select,
    argTypes: {}
}

const Template: Storybook.StoryFn<Resolut.Component.SelectProps> = ({ ...props }: Resolut.Component.SelectProps) => (
    <Select {...props} />
)

export const DefaultSelect: Storybook.AnnotatedStoryFn<Storybook.Renderer, Resolut.Component.SelectProps> =
    Template.bind({})

DefaultSelect.args = {} as Resolut.Component.SelectProps

export default Story
