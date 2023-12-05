import Field from './field.component'

const Story: Storybook.Meta<Resolut.Component.FieldProps> = {
    title: 'Field',
    component: Field,
    argTypes: {}
}

const Template: Storybook.StoryFn<Resolut.Component.FieldProps> = ({ ...props }: Resolut.Component.FieldProps) => (
    <Field {...props} />
)

export const DefaultField: Storybook.AnnotatedStoryFn<Storybook.Renderer, Resolut.Component.FieldProps> = Template.bind(
    {}
)

DefaultField.args = {
    children: 'E-mail'
} as Resolut.Component.FieldProps

export default Story
