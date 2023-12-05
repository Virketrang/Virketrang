import Div from './div.component'

const Story: Storybook.Meta<Resolut.Component.DivProps> = {
    title: 'Div',
    component: Div,
    argTypes: {}
}

const Template: Storybook.StoryFn<Resolut.Component.DivProps> = ({ ...props }: Resolut.Component.DivProps) => (
    <Div {...props} />
)

export const DefaultDiv: Storybook.AnnotatedStoryFn<Storybook.Renderer, Resolut.Component.DivProps> = Template.bind({})

DefaultDiv.args = {
    children: 'E-mail'
} as Resolut.Component.DivProps

export default Story
