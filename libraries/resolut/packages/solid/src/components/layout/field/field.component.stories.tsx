import Field from './field.component'
import { FieldComponent, FieldProps, FieldRef } from './field.component.types'

const Story: Storybook.Meta<FieldComponent> = {
    title: 'Field',
    component: Field,
    argTypes: {}
}

const Template: Storybook.StoryFn<FieldComponent> = ({ ...props }) => <Field {...props} />

export const DefaultField: Storybook.AnnotatedStoryFn<Storybook.ReactRenderer, FieldProps & FieldRef> = Template.bind(
    {}
)

DefaultField.args = {
    children: 'E-mail'
}

export default Story
