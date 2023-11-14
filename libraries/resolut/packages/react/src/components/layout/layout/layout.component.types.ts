export type LayoutProps = Omit<Resolut.Component.Props.Layout<Resolut.Attribute.Layout.Element>, 'align'> & {
    element: Resolut.Attribute.Layout.Element
    tag: Resolut.Primitive.String
    align?: Resolut.Primitive.String
}

export type LayoutRef = Resolut.Component.Ref<HTMLFormElement | HTMLElement | HTMLDivElement | HTMLBodyElement>

export type LayoutComponent = Resolut.Component<LayoutProps & LayoutRef>

export default LayoutComponent
