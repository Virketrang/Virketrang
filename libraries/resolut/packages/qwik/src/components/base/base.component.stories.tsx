import Base from './base.component'

const Story: Storybook.Meta<HTMLElement, Resolut.Component.BaseProps> = {
    title: 'Base',
    component: Base,
    argTypes: {}
}

const Template: Storybook.StoryFn<HTMLElement, Resolut.Component.BaseProps> = ({ ...props }) => <Base {...props} />

export const DefaultBase: Storybook.AnnotatedStoryFn<Storybook.Renderer, Resolut.Component.BaseProps> = Template.bind(
    {}
)

DefaultBase.args = {
    element: 'div'
}

export default Story
