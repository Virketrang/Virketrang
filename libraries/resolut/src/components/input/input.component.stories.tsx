import Input from './input.component'
import { InputComponent, InputProps, InputRef } from './input.component.types'

const Story: Storybook.Meta<InputComponent> = {
    title: 'Input',
    component: Input,
    argTypes: {
        stretch: {
            defaultValue: false,
            control: {
                type: 'boolean'
            }
        },
        shape: {
            defaultValue: 'square',
            control: {
                type: 'select'
            },
            options: ['square', 'round', 'rounded']
        },
        type: {
            defaultValue: 'text',
            control: {
                type: 'select'
            },
            options: [
                'text',
                'password',
                'email',
                'number',
                'tel',
                'url',
                'date',
                'datetime-local',
                'month',
                'week',
                'time',
                'search',
                'color',
                'file',
                'hidden',
                'image',
                'button',
                'checkbox',
                'radio',
                'range',
                'reset',
                'submit'
            ]
        },
        name: {
            defaultValue: 'input',
            control: {
                type: 'text'
            }
        }
    }
}

const Template: Storybook.StoryFn<InputComponent> = ({ ...props }) => <Input {...props} />

export const TextInput: Storybook.AnnotatedStoryFn<Storybook.ReactRenderer, InputProps & InputRef> = Template.bind({})

TextInput.args = {
    type: 'text',
    placeholder: 'Text input...',
    stretch: false,
    shape: 'square',
    name: 'text-input'
}

export default Story
