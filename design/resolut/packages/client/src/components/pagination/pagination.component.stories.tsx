import { Meta, StoryFn } from '@storybook/react'

const Story: Meta<Resolut.Pagination.Component> = {
    component: Pagination
}

const Template: StoryFn<Resolut.Pagination.Component> = ({ ...props }) => <Pagination {...props} />

export const Basic = Template.bind({})

Basic.args = {
    back: () => null,
    forward: () => null,
    index: 1,
    pages: 10
}

export default Story
