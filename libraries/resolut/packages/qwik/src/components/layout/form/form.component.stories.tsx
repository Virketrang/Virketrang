import Form from './form.component'

const Story: Storybook.Meta<Resolut.Component.FormProps> = {
    title: 'Form',
    component: Form,
    argTypes: {}
}

const Template: Storybook.StoryFn<Resolut.Component.FormProps> = ({ ...props }: Resolut.Component.FormProps) => (
    <Form {...props} />
)

export const DefaultForm: Storybook.AnnotatedStoryFn<Storybook.Renderer, Resolut.Component.FormProps> = Template.bind(
    {}
)

DefaultForm.args = {} as Resolut.Component.FormProps

export default Story
