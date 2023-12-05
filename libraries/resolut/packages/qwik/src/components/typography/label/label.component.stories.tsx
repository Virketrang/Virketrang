import Label from './label.component'

const Story: Storybook.Meta<Resolut.Component.LabelProps> = {
    title: 'Label',
    component: Label,
    argTypes: {}
}

const Template: Storybook.StoryFn<Resolut.Component.LabelProps> = ({ ...props }: Resolut.Component.LabelProps) => (
    <Label {...props} />
)

export const DefaultLabel: Storybook.AnnotatedStoryFn<Storybook.Renderer, Resolut.Component.LabelProps> = Template.bind(
    {}
)

DefaultLabel.args = {
    children: 'E-mail'
} as Resolut.Component.LabelProps

export default Story
