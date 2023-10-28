export type BaseProps = Resolut.Component.Props<React.ElementType> & {
    element: React.ElementType
    tag: string
}

export type BaseRef = Resolut.Component.Ref<HTMLElement>

export type BaseComponent = Resolut.Component<BaseProps & BaseRef>

export default BaseComponent
