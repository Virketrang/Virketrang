export type LabelProps = Resolut.Component.Props<'label'> & {
    size?: Resolut.Attribute.Size
    stretch?: Resolut.Primitive.Boolean
    required?: Resolut.Primitive.Boolean
    children?: Resolut.Primitive.String
} & Resolut.Attribute.Casing

export type LabelRef = React.RefAttributes<HTMLLabelElement>

export type LabelComponent = React.MemoExoticComponent<React.ForwardRefExoticComponent<LabelProps & LabelRef>>

export default LabelComponent
