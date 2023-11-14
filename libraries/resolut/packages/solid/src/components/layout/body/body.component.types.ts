export type BodyProps = Resolut.Component.Props.Layout<'body'> & {
    unselectable?: Resolut.Primitive.Boolean
}

export type BodyRef = React.RefAttributes<HTMLElement>

export type BodyComponent = React.MemoExoticComponent<React.ForwardRefExoticComponent<BodyProps & BodyRef>>

export default BodyComponent
