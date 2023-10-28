export interface SelectProps extends Omit<Resolut.Component.Props<'select'>, 'size'> {
    size?: Resolut.Attribute.Size
    maxLength?: Resolut.Primitive.Number
    elevated?: Resolut.Primitive.Boolean
    stretch?: Resolut.Primitive.Boolean
    children?: Resolut.Primitive.Never
    options?: Resolut.Attribute.Option[]
    shape?: Exclude<Resolut.Attribute.Shape, 'circle'>
}

export type SelectRef = React.RefAttributes<HTMLSelectElement>

export type SelectComponent = React.MemoExoticComponent<React.ForwardRefExoticComponent<SelectProps & SelectRef>>
