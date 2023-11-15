export type LayoutProps = Omit<Resolut.Component.LayoutProps<Resolut.Attribute.Layout.Element>, 'align'> & {
    element: Resolut.Attribute.Layout.Element
    tag: Resolut.Primitive.String
    align?: Resolut.Primitive.String
}

export default LayoutProps
