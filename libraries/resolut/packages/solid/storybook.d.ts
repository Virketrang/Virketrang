declare global {
    namespace Storybook {
        type AnnotatedStoryFn<T1, T2> = import('@storybook/types').AnnotatedStoryFn<T1, T2>
        type Meta<T1, T2 = {}> = import('storybook-solidjs').Meta<Resolut.Component<T2>>
        type StoryFn<T1, T2 = {}> = import('storybook-solidjs').StoryFn<Resolut.Component<T2>>
        type Renderer = import('storybook-solidjs').SolidRenderer
    }
}

export {}
