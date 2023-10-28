import Button from './button.component'
import { ButtonComponent, ButtonProps, ButtonRef } from './button.component.types'

const Story: Storybook.Meta<ButtonComponent> = {
    title: 'Button',
    component: Button,
    argTypes: {
        shape: {
            defaultValue: 'square',
            control: {
                type: 'select'
            },
            options: ['square', 'round', 'rounded', 'circle']
        },
        color: {
            defaultValue: 'primary',
            control: {
                type: 'select'
            },
            options: ['primary', 'secondary']
        },
        size: {
            defaultValue: 'large',
            control: {
                type: 'select'
            },
            options: ['small', 'medium', 'large']
        },
        sizing: {
            defaultValue: 'fixed',
            control: {
                type: 'select'
            },
            options: ['fixed', 'relative']
        },
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

export const RoundButton: Storybook.AnnotatedStoryFn<Storybook.ReactRenderer, ButtonProps & ButtonRef> = Template.bind(
    {}
)

RoundButton.args = {
    children: 'Round',
    shape: 'round',
    color: 'primary',
    size: 'large',
    sizing: 'fixed',
    disabled: false,
    stretch: false
}

export const RoundedButton: Storybook.AnnotatedStoryFn<Storybook.ReactRenderer, ButtonProps & ButtonRef> =
    Template.bind({})

RoundedButton.args = {
    children: 'Rounded',
    shape: 'round',
    color: 'primary',
    size: 'large',
    sizing: 'fixed',
    disabled: false,
    stretch: false
}

export const SquareButton: Storybook.AnnotatedStoryFn<Storybook.ReactRenderer, ButtonProps & ButtonRef> = Template.bind(
    {}
)

SquareButton.args = {
    children: 'Square',
    shape: 'square',
    color: 'primary',
    size: 'large',
    sizing: 'fixed',
    disabled: false,
    stretch: false
}

export const CircleButton: Storybook.AnnotatedStoryFn<Storybook.ReactRenderer, ButtonProps & ButtonRef> = Template.bind(
    {}
)

CircleButton.args = {
    children: '+',
    shape: 'circle',
    color: 'primary',
    size: 'large',
    sizing: 'fixed',
    disabled: false,
    stretch: false
}

export const RoundAnchor: Storybook.AnnotatedStoryFn<Storybook.ReactRenderer, ButtonProps & ButtonRef> = Template.bind(
    {}
)

RoundAnchor.args = {
    children: 'Round',
    shape: 'round',
    color: 'primary',
    size: 'large',
    sizing: 'fixed',
    disabled: false,
    stretch: false
}

export const RoundedAnchor: Storybook.AnnotatedStoryFn<Storybook.ReactRenderer, ButtonProps & ButtonRef> =
    Template.bind({})

RoundedAnchor.args = {
    children: 'Rounded',
    shape: 'round',
    color: 'primary',
    size: 'large',
    sizing: 'fixed',
    disabled: false,
    stretch: false
}

export const SquareAnchor: Storybook.AnnotatedStoryFn<Storybook.ReactRenderer, ButtonProps & ButtonRef> = Template.bind(
    {}
)

SquareAnchor.args = {
    children: 'Square',
    shape: 'square',
    color: 'primary',
    size: 'large',
    sizing: 'fixed',
    disabled: false,
    stretch: false
}

export const CircleAnchor: Storybook.AnnotatedStoryFn<Storybook.ReactRenderer, ButtonProps & ButtonRef> = Template.bind(
    {}
)

CircleAnchor.args = {
    children: '+',
    shape: 'circle',
    color: 'primary',
    size: 'large',
    sizing: 'fixed',
    disabled: false,
    stretch: false
}

export default Story
