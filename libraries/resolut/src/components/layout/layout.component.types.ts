export type LayoutProps = Resolut.Component.Props.Layout<'div' | 'section' | 'article' | 'main'> & {
    element: 'div' | 'section' | 'article' | 'main'
    tag: Resolut.Primitive.String
}

export type LayoutRef = React.RefAttributes<HTMLElement>

export type LayoutComponent = React.MemoExoticComponent<React.ForwardRefExoticComponent<LayoutProps & LayoutRef>>

export default LayoutComponent
