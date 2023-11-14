import { Component as SolidComponent, JSX, ValidComponent } from 'solid-js'

declare global {
    namespace Resolut {
        type Component<T = {}> = SolidComponent<T>

        type Element = ValidComponent

        namespace Component {
            type Props<T> = Omit<JSX.HTMLAttributes<T>, 'unselectable' | 'style'> & {
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
                style?: JSX.CSSProperties
            } & Resolut.Attribute.Cursor

            namespace Props {
                type Layout<T> = Resolut.Component.Props<T> & {
                    gap?: Resolut.Primitive.String
                    center?: Resolut.Primitive.Boolean
                } & Resolut.Attribute.Layout.Grid &
                    Resolut.Attribute.Layout.Flex

                type Typography<T> = Resolut.Component.Props<T> & {
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

                type Input<T> = Resolut.Component.Props<T> & {
                    elevated?: Resolut.Primitive.Boolean
                    disabled?: Resolut.Primitive.Boolean
                    error?: Resolut.Primitive.Boolean
                } & Resolut.Attribute.Size &
                    Omit<Resolut.Attribute.Shape, 'circle'>
            }
        }
    }
}
