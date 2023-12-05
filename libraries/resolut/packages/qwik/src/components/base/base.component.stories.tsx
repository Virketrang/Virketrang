import { QwikIntrinsicElements } from '@builder.io/qwik'
import Base from './base.component'

const Story: Storybook.Meta<Resolut.Component.BaseProps<keyof QwikIntrinsicElements>> = {
    title: 'Base',
    component: Base,
    argTypes: {}
}

const Template: Storybook.StoryFn<Resolut.Component.BaseProps<keyof QwikIntrinsicElements>> = ({
    ...props
}: Resolut.Component.BaseProps<keyof QwikIntrinsicElements>) => <Base {...props} />

export const DefaultBase: Storybook.AnnotatedStoryFn<
    Storybook.Renderer,
    Resolut.Component.BaseProps<keyof QwikIntrinsicElements>
> = Template.bind({})

DefaultBase.args = {
    tag: 'base',
    element: 'div',
    children: 'Base',
    margin: '4rem',
    padding: '4rem'
} as Resolut.Component.BaseProps<keyof QwikIntrinsicElements>

export default Story
