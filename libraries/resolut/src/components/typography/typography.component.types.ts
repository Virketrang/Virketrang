export type TypographyProps = Resolut.Component.Props.Typography<React.ElementType> & {
    element: Resolut.Attribute.Typography.Component
    tag: Resolut.Primitive.String
}

export type TypographyRef = Resolut.Component.Ref<HTMLElement>

export type TypographyComponent = Resolut.Component<TypographyProps & TypographyRef>

export default TypographyComponent
