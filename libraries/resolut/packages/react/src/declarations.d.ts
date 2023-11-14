declare global {
    namespace Resolut {
        type Component<T = {}> = React.MemoExoticComponent<React.ForwardRefExoticComponent<T>>

        type Element = React.ElementType<any>

        namespace Component {
            type Ref<T> = React.RefAttributes<T>

            type Props<T1 extends React.ElementType<any>> = Omit<
                React.ComponentPropsWithoutRef<T1>,
                'unselectable' | 'className'
            > & {
                margin?: Resolut.Primitive.String
                padding?: Resolut.Primitive.String
                row?: Resolut.Attribute.Layout.GridArea
                column?: Resolut.Attribute.Layout.GridArea
                stretch?: Resolut.Primitive.Boolean
                width?: Resolut.Primitive.String
                height?: Resolut.Primitive.String
                minWidth?: Resolut.Primitive.String
                minHeight?: Resolut.Primitive.String
                maxWidth?: Resolut.Primitive.String
                maxHeight?: Resolut.Primitive.String
                unselectable?: Resolut.Primitive.Boolean
                class?: Resolut.Primitive.String
                children?: React.ReactNode
            } & Resolut.Attribute.Cursor

            namespace Props {
                type Layout<T1 extends React.ElementType<any>> = Resolut.Component.Props<T1> & {
                    gap?: Resolut.Primitive.String
                    center?: Resolut.Primitive.Boolean
                } & Resolut.Attribute.Layout.Grid &
                    Resolut.Attribute.Layout.Flex

                type Typography<T1 extends React.ElementType<any>> = Resolut.Component.Props<T1> & {
                    letterSpacing?: Resolut.Primitive.String
                    lineHeight?: Resolut.Primitive.String
                    fontSize?: Resolut.Primitive.String
                    decorationColor?: Resolut.Primitive.String
                    decorationThickness?: Resolut.Primitive.String
                    italic?: Resolut.Primitive.Boolean
                    fluid?: Resolut.Primitive.Boolean
                } & Resolut.Attribute.Typography.Casing &
                    Resolut.Attribute.Typography.TextWrap &
                    Resolut.Attribute.Typography.TextAlign &
                    Resolut.Attribute.Color &
                    Resolut.Attribute.Typography.FontWeight &
                    Resolut.Attribute.Typography.DecorationLine &
                    Resolut.Attribute.Typography.DecorationStyle

                type Input<T1 extends React.ElementType<any>> = Resolut.Component.Props<T1> & {
                    elevated?: Resolut.Primitive.Boolean
                    disabled?: Resolut.Primitive.Boolean
                    error?: Resolut.Primitive.Boolean
                } & Resolut.Attribute.Size &
                    Omit<Resolut.Attribute.Shape, 'circle'>
            }
        }
    }
}

export {}
