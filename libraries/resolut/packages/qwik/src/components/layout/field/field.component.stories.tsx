import Field from './field.component'

const Story: Storybook.Meta<HTMLDivElement, Resolut.Component.FieldProps> = {
    title: 'Field',
    component: Field,
    argTypes: {}
}

const Template: Storybook.StoryFn<HTMLDivElement, Resolut.Component.FieldProps> = ({ ...props }) => <Field {...props} />

export const DefaultField: Storybook.AnnotatedStoryFn<Storybook.Renderer, Resolut.Component.FieldProps> = Template.bind(
    {}
)

DefaultField.args = {
    children: 'E-mail'
}

export default Story
