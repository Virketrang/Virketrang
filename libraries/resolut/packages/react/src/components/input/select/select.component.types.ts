export interface SelectProps extends Resolut.Component.Props.Input<'select'> {
    children?: Resolut.Primitive.Never
    options?: Resolut.Attribute.Input.Select.Option[]
}

export type SelectRef = Resolut.Component.Ref<HTMLSelectElement>

export type SelectComponent = Resolut.Component<SelectProps & SelectRef>
