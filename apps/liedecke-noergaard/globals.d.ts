export {}

declare global {
    type FunctionComponent<P = {}> = React.FunctionComponent<P>

    type ComponentProps<T extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>> =
        React.ComponentProps<T>

    interface ChangeEvent<T = Element> extends React.SyntheticEvent<T> {
        target: EventTarget & T
    }

    type Dispatch<A> = React.Dispatch<A>

    type SetStateAction<S> = React.SetStateAction<S>

    interface FormEvent<T = Element> extends React.SyntheticEvent<T> {}

    type ReactNode = React.ReactNode
}
