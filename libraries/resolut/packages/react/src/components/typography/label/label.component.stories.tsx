import Label from './label.component'
import { LabelComponent, LabelProps } from './label.component.types'

const Story: Storybook.Meta<LabelComponent> = {
    title: 'Label',
    component: Label,
    argTypes: {}
}

const Template: Storybook.StoryFn<LabelComponent> = ({ ...props }) => <Label {...props} />

export const DefaultLabel: Storybook.AnnotatedStoryFn<Storybook.ReactRenderer, LabelProps> = Template.bind({})

DefaultLabel.args = {
    children: 'E-mail'
}

export default Story
