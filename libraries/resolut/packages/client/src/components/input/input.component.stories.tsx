import { Meta, StoryFn } from '@storybook/react'

const Story: Meta<Resolut.Input.Component> = {
    component: Input
}

const Template: StoryFn<Resolut.Input.Component> = ({ ...props }) => <Input {...props} />

export const Basic = Template.bind({})

Basic.args = {
    placeholder: 'Navn'
}

export default Story
