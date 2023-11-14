export type LinkProps = Resolut.Component.Props.Typography<'a'> & {
    children: Resolut.Primitive.String
}

export type LinkRef = Resolut.Component.Ref<HTMLAnchorElement>

export type LinkComponent = Resolut.Component<LinkProps & LinkRef>
