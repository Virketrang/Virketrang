import Text from './text.component'
import { TextComponent, TextProps } from './text.component.types'

const Story: Storybook.Meta<TextComponent> = {
    title: 'Text',
    component: Text,
    argTypes: {
        stretch: {
            defaultValue: false,
            control: {
                type: 'boolean'
            }
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
            defaultValue: 'Text',
            control: {
                type: 'text'
            }
        }
    }
}

const Template: Storybook.StoryFn<TextComponent> = ({ ...props }) => <Text {...props} />

export const DefaultText: Storybook.AnnotatedStoryFn<Storybook.ReactRenderer, TextProps> = Template.bind({})

DefaultText.args = {
    type: 'text',
    placeholder: 'Text...',
    stretch: false,
    name: 'text'
}

export default Story
