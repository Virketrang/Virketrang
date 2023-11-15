import Label from './label.component'

const Story: Storybook.Meta<HTMLLabelElement, Resolut.Component.LabelProps> = {
    title: 'Label',
    component: Label,
    argTypes: {}
}

const Template: Storybook.StoryFn<HTMLLabelElement, Resolut.Component.LabelProps> = ({ ...props }) => (
    <Label {...props} />
)

export const DefaultLabel: Storybook.AnnotatedStoryFn<Storybook.Renderer, Resolut.Component.LabelProps> = Template.bind(
    {}
)

DefaultLabel.args = {
    children: 'E-mail'
}

export default Story
