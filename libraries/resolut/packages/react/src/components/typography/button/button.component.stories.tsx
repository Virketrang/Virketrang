import Button from './button.component'
import { ButtonComponent, ButtonProps } from './button.component.types'

const Story: Storybook.Meta<ButtonComponent> = {
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

const Template: Storybook.StoryFn<ButtonComponent> = ({ ...props }) => <Button {...props} />

export const RoundButton: Storybook.AnnotatedStoryFn<Storybook.ReactRenderer, ButtonProps> = Template.bind({})

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
}

export const RoundedButton: Storybook.AnnotatedStoryFn<Storybook.ReactRenderer, ButtonProps> = Template.bind({})

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
}

export const SquareButton: Storybook.AnnotatedStoryFn<Storybook.ReactRenderer, ButtonProps> = Template.bind({})

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
}

export const CircleButton: Storybook.AnnotatedStoryFn<Storybook.ReactRenderer, ButtonProps> = Template.bind({})

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
}

export default Story
