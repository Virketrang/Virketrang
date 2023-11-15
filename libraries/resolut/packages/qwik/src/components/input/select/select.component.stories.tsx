import Select from './select.component'

const Story: Storybook.Meta<HTMLSelectElement, Resolut.Component.SelectProps> = {
    title: 'Select',
    component: Select,
    argTypes: {}
}

const Template: Storybook.StoryFn<HTMLSelectElement, Resolut.Component.SelectProps> = ({ ...props }) => (
    <Select {...props} />
)

export const DefaultSelect: Storybook.AnnotatedStoryFn<Storybook.Renderer, Resolut.Component.SelectProps> =
    Template.bind({})

DefaultSelect.args = {}

export default Story
