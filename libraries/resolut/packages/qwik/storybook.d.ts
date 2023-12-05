declare global {
    namespace Storybook {
        type AnnotatedStoryFn<T1, T2> = import('storybook-framework-qwik').StoryFn<T1, T2>
        type Meta<T2 = {}> = import('storybook-framework-qwik').Meta<Resolut.Component<T2>>
        type StoryFn<T2> = import('storybook-framework-qwik').StoryFn<Resolut.Component<T2>>
        type Renderer = import('storybook-framework-qwik').QwikRenderer
    }
}

export {}
