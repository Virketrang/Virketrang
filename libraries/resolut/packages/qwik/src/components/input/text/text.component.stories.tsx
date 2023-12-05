import Text from './text.component'

const Story: Storybook.Meta<Resolut.Component.TextProps> = {
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

const Template: Storybook.StoryFn<Resolut.Component.TextProps> = ({ ...props }: Resolut.Component.TextProps) => (
    <Text {...props} />
)

export const DefaultText: Storybook.AnnotatedStoryFn<Storybook.Renderer, Resolut.Component.TextProps> = Template.bind(
    {}
)

DefaultText.args = {
    type: 'text',
    placeholder: 'Text...',
    stretch: false,
    name: 'text'
} as Resolut.Component.TextProps

export default Story
