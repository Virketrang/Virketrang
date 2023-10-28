declare global {
    namespace Storybook {
        type Meta<T> = import('@storybook/react').Meta<T>
        type StoryFn<T> = import('@storybook/react').StoryFn<T>
        type ReactRenderer = import('@storybook/react').ReactRenderer
        type AnnotatedStoryFn<T1, T2> = import('@storybook/react').AnnotatedStoryFn<T1, T2>
    }
}

export {}
