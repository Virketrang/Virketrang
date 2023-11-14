export type LabelProps = Resolut.Component.Props.Typography<'label'> & {
    size?: Resolut.Attribute.Size
    required?: Resolut.Primitive.Boolean
    children?: Resolut.Primitive.String
}

export type LabelRef = Resolut.Component.Ref<HTMLLabelElement>

export type LabelComponent = Resolut.Component<LabelProps & LabelRef>

export default LabelComponent
