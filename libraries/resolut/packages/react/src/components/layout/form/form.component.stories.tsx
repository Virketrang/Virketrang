import Form from './form.component'
import { FormComponent, FormProps } from './form.component.types'

const Story: Storybook.Meta<FormComponent> = {
    title: 'Form',
    component: Form,
    argTypes: {}
}

const Template: Storybook.StoryFn<FormComponent> = ({ ...props }) => <Form {...props} />

export const DefaultForm: Storybook.AnnotatedStoryFn<Storybook.ReactRenderer, FormProps> = Template.bind({})

DefaultForm.args = {}

export default Story
