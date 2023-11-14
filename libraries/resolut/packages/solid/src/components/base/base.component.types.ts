import { JSX, ValidComponent } from 'solid-js'

export type BaseProps = Resolut.Component.Props<Resolut.Element> & {
    element: Resolut.Element
    tag: string
}

export type BaseComponent = Resolut.Component<BaseProps>

export default BaseComponent
