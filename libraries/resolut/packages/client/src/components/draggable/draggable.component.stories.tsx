import React from 'react'

import { Meta, StoryFn } from '@storybook/react'

import DraggableComponent from './draggable.component.types'
import Draggable from './draggable.component'

const Story: Meta<DraggableComponent> = {
    title: 'Draggable',
    component: Draggable
}

const Template: StoryFn<DraggableComponent> = ({ ...props }) => <Draggable {...props} />

export const Basic = Template.bind({})

Basic.args = {
    children: (
        <div
            style={{
                width: '200px',
                height: '50px',
                background: 'blue',
                color: 'white',
                display: 'grid',
                placeItems: 'center'
            }}
        >
            Test 1
        </div>
    )
}

export default Story
