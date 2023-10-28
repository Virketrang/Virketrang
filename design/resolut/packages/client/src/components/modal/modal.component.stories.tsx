import { Meta, StoryFn } from '@storybook/react'

const Story: Meta<Resolut.Modal.Component> = {
    component: Modal
}

const Template: StoryFn<Resolut.Modal.Component> = ({ ...props }) => <Modal {...props} />

export const Basic = Template.bind({})

Basic.args = {
    open: false,
    children: <h1>Test</h1>
}

export default Story
