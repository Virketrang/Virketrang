import { Meta, StoryFn } from '@storybook/react'

import Carousel from './carousel.component'
import Slide from './components/slide/slide.component'

const Story: Meta<typeof Carousel> = { title: 'Carousel', component: Carousel }

const Template: StoryFn<typeof Carousel> = ({ children, ...props }) => (
    <Carousel {...props}>
        <Slide style={{ background: 'red' }}>1</Slide>
        <Slide style={{ background: 'blue' }}>2</Slide>
        <Slide style={{ background: 'orange' }}>3</Slide>
    </Carousel>
)

export const Basic = Template.bind({})

Basic.args = {}

export default Story
