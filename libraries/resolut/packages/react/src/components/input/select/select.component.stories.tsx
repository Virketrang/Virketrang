import Select from './select.component'
import { SelectComponent, SelectProps } from './select.component.types'

const Story: Storybook.Meta<SelectComponent> = {
    title: 'Select',
    component: Select,
    argTypes: {}
}

const Template: Storybook.StoryFn<SelectComponent> = ({ ...props }) => <Select {...props} />

export const DefaultSelect: Storybook.AnnotatedStoryFn<Storybook.ReactRenderer, SelectProps> = Template.bind({})

DefaultSelect.args = {}

export default Story
