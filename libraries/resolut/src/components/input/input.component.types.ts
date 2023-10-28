export interface InputProps extends Omit<React.ComponentPropsWithoutRef<'input'>, 'size' | 'id'> {
    size?: Resolut.Attribute.Size
    maxLength?: Resolut.Primitive.Number
    stretch?: Resolut.Primitive.Boolean
    shape?: Exclude<Resolut.Attribute.Shape, 'circle'>
    elevated?: Resolut.Primitive.Boolean
    children?: Resolut.Primitive.Never
}

export type InputRef = React.RefAttributes<HTMLInputElement>

export type InputComponent = React.MemoExoticComponent<React.ForwardRefExoticComponent<InputProps & InputRef>>
