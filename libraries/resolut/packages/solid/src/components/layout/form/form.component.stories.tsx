import Form from './form.component'

const Story: Storybook.Meta<HTMLFormElement, Resolut.Component.FormProps> = {
    title: 'Form',
    component: Form,
    argTypes: {}
}

const Template: Storybook.StoryFn<HTMLFormElement, Resolut.Component.FormProps> = ({ ...props }) => <Form {...props} />

export const DefaultForm: Storybook.AnnotatedStoryFn<Storybook.Renderer, Resolut.Component.FormProps> = Template.bind(
    {}
)

DefaultForm.args = {}

export default Story
