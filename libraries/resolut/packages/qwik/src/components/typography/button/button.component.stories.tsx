import Button from './button.component'

const Story: Storybook.Meta<Resolut.Component.ButtonProps> = {
    title: 'Button',
    component: Button,
    argTypes: {
        stretch: {
            defaultValue: false,
            control: {
                type: 'boolean'
            }
        },
        disabled: {
            defaultValue: false,
            control: {
                type: 'boolean'
            }
        }
    }
}

const Template: Storybook.StoryFn<Resolut.Component.ButtonProps> = ({ ...props }: Resolut.Component.ButtonProps) => (
    <Button />
)

export const RoundButton: Storybook.AnnotatedStoryFn<Storybook.Renderer, Resolut.Component.ButtonProps> = Template.bind(
    {}
)

RoundButton.args = {
    round: true,
    square: false,
    circle: false,
    rounded: false,
    large: true,
    medium: false,
    small: false,
    children: 'Round',
    disabled: false,
    stretch: false
} as Resolut.Component.ButtonProps

export const RoundedButton: Storybook.AnnotatedStoryFn<Storybook.Renderer, Resolut.Component.ButtonProps> =
    Template.bind({})

RoundedButton.args = {
    rounded: true,
    round: false,
    square: false,
    circle: false,
    large: true,
    medium: false,
    small: false,
    children: 'Rounded',
    disabled: false,
    stretch: false
} as Resolut.Component.ButtonProps

export const SquareButton: Storybook.AnnotatedStoryFn<Storybook.Renderer, Resolut.Component.ButtonProps> =
    Template.bind({})

SquareButton.args = {
    square: true,
    round: false,
    rounded: false,
    circle: false,
    large: true,
    medium: false,
    small: false,
    children: 'Square',
    disabled: false,
    stretch: false
} as Resolut.Component.ButtonProps

export const CircleButton: Storybook.AnnotatedStoryFn<Storybook.Renderer, Resolut.Component.ButtonProps> =
    Template.bind({})

CircleButton.args = {
    circle: true,
    round: false,
    rounded: false,
    square: false,
    large: true,
    medium: false,
    small: false,
    children: '+',
    disabled: false,
    stretch: false
} as Resolut.Component.ButtonProps

export default Story
