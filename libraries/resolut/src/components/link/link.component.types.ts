export interface LinkProps extends Omit<Resolut.Component.Props<'a'>, 'size'> {
    underlined?: Resolut.Primitive.Boolean
    children: Resolut.Primitive.String
}

export type LinkRef = React.RefAttributes<HTMLAnchorElement>

export type LinkComponent = React.MemoExoticComponent<React.ForwardRefExoticComponent<LinkProps & LinkRef>>
