declare global {
    namespace Storybook {
        type AnnotatedStoryFn<T1, T2> = import('@storybook/types').AnnotatedStoryFn<T1, T2>
        type Meta<T> = import('storybook-solidjs').Meta<T>
        type StoryFn<T> = import('storybook-solidjs').StoryFn<T>
        type Renderer = import('storybook-solidjs').SolidRenderer
    }
}

export {}
