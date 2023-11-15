declare global {
    namespace Storybook {
        type Meta<T1, T2 = {}> = import('@storybook/react').Meta<Resolut.Component<T2 & Resolut.Component.Ref<T1>>>
        type StoryFn<T1, T2 = {}> = import('@storybook/react').StoryFn<
            Resolut.Component<T2 & Resolut.Component.Ref<T1>>
        >
        type Renderer = import('@storybook/react').ReactRenderer
        type AnnotatedStoryFn<T1, T2> = import('@storybook/types').AnnotatedStoryFn<T1, T2>
    }
}

export {}
