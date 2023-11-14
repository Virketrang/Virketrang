export type TypographyProps = Resolut.Component.Props.Typography<React.ElementType<any>> & {
    element: Resolut.Attribute.Typography.Element
    tag: Resolut.Primitive.String
}

export type TypographyRef = Resolut.Component.Ref<HTMLElement>

export type TypographyComponent = Resolut.Component<TypographyProps & TypographyRef>
