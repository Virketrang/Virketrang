export interface SelectProps extends Resolut.Component.Props.Input<'select'> {
    children?: Resolut.Primitive.Never
    options?: Resolut.Attribute.Input.Select.Option[]
}

export type SelectRef = React.RefAttributes<HTMLSelectElement>

export type SelectComponent = React.MemoExoticComponent<React.ForwardRefExoticComponent<SelectProps & SelectRef>>
