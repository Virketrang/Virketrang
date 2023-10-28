declare global {
    namespace Resolut {
        type Component<T = {}> = React.MemoExoticComponent<React.ForwardRefExoticComponent<T>>

        namespace Component {
            type Ref<T> = React.RefAttributes<T>
            type Props<T extends React.ElementType<any>> = React.ComponentPropsWithoutRef<T> & {
                margin?: Resolut.Primitive.String
                padding?: Resolut.Primitive.String
                row?: Resolut.Attribute.GridArea
                column?: Resolut.Attribute.GridArea
                stretch?: Resolut.Primitive.Boolean
                width?: Resolut.Primitive.String
                height?: Resolut.Primitive.String
                minWidth?: Resolut.Primitive.String
                minHeight?: Resolut.Primitive.String
            }

            namespace Props {
                type Grid =
                    | {
                          grid: true
                          flex?: Resolut.Primitive.Never
                          columns?: Resolut.Primitive.String
                          rows?: Resolut.Primitive.String
                      }
                    | {
                          grid?: false
                          flex?: Resolut.Primitive.Boolean
                          columns?: Resolut.Primitive.Never
                          rows?: Resolut.Primitive.Never
                      }

                type Flex =
                    | ({
                          flex: true
                          grid?: Resolut.Primitive.Never
                          reverse?: Resolut.Primitive.Boolean
                          alignItems?: Resolut.Attribute.AlignItems
                          justifyContent?: Resolut.Attribute.JustifyContent
                      } & Resolut.Attribute.FlexDirection)
                    | ({
                          flex?: false
                          grid?: Resolut.Primitive.Boolean
                          reverse?: Resolut.Primitive.Never
                          direction?: Resolut.Primitive.Never
                          alignItems?: Resolut.Primitive.Never
                          justifyContent?: Resolut.Primitive.Never
                      } & {
                          vertical: Resolut.Primitive.Never
                          horizontal: Resolut.Primitive.Never
                      })

                type Layout<T extends React.ElementType<any>> = Resolut.Component.Props<T> & {
                    gap?: Resolut.Primitive.String
                    center?: Resolut.Primitive.Boolean
                } & Resolut.Props.Grid &
                    Resolut.Props.Flex

                type Typography<T extends React.ElementType<any>> = Resolut.Component.Props<T> & {
                    textAlign?: Resolut.Attribute.TextAlign
                    fontWeight?: Resolut.Attribute.FontWeight
                    letterSpacing?: Resolut.Primitive.String
                    lineHeight?: Resolut.Primitive.String
                    fontSize?: Resolut.Primitive.String
                    color?: Resolut.Attribute.Color
                } & Resolut.Attribute.Casing &
                    Resolut.Attribute.FontStyle &
                    Resolut.Attribute.TextWrap &
                    Resolut.Attribute.TextAlign
            }
        }

        namespace Attribute {
            type AlignItems = 'start' | 'end' | 'center' | 'stretch' | 'baseline'

            type JustifyContent = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'

            type Size = 'small' | 'medium' | 'large'

            type Color = 'primary' | 'secondary'

            type Shape = 'rounded' | 'square' | 'round' | 'circle'

            type Sizing = 'fixed' | 'relative'

            type GridArea = Resolut.Primitive.String.AllowNumeric.Suggestions<'span-all'>

            type Option = { value: Resolut.Primitive.String; name: Resolut.Primitive.String }

            namespace Typography {
                type Component = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

                type Variant =
                    | 'heading1'
                    | 'heading2'
                    | 'heading3'
                    | 'heading4'
                    | 'paragraph1'
                    | 'paragraph2'
                    | 'caption1'
                    | 'caption2'
            }

            type FontWeight =
                | 'thin'
                | 'extra-light'
                | 'light'
                | 'regular'
                | 'medium'
                | 'semi-bold'
                | 'bold'
                | 'extra-bold'
                | 'black'

            type FontStyle =
                | { italic: true; bold: Resolut.Primitive.Never; regular: Resolut.Primitive.Never }
                | {
                      bold: true
                      italic: Resolut.Primitive.Never
                      regular: Resolut.Primitive.Never
                  }
                | { regular: true; italic: Resolut.Primitive.Never; bold: Resolut.Primitive.Never }

            type TextAlign =
                | {
                      start: true
                      end: Resolut.Primitive.Never
                      justify: Resolut.Primitive.Never
                      center: Resolut.Primitive.Never
                  }
                | {
                      start: Resolut.Primitive.Never
                      end: true
                      justify: Resolut.Primitive.Never
                      center: Resolut.Primitive.Never
                  }
                | {
                      start: Resolut.Primitive.Never
                      end: Resolut.Primitive.Never
                      justify: true
                      center: Resolut.Primitive.Never
                  }
                | {
                      start: Resolut.Primitive.Never
                      end: Resolut.Primitive.Never
                      justify: Resolut.Primitive.Never
                      center: true
                  }

            type TextWrap =
                | { wrap: true; nowrap: Resolut.Primitive.Never; balance: Resolut.Primitive.Never }
                | {
                      nowrap: true
                      wrap: Resolut.Primitive.Never
                      balance: Resolut.Primitive.Never
                  }
                | { balance: true; wrap: Resolut.Primitive.Never; nowrap: Resolut.Primitive.Never }

            type Casing =
                | {
                      uppercase?: Resolut.Primitive.Boolean
                      lowercase?: Resolut.Primitive.Never
                      capitalize?: Resolut.Primitive.Never
                  }
                | {
                      lowercase?: Resolut.Primitive.Boolean
                      uppercase?: Resolut.Primitive.Never
                      capitalize?: Resolut.Primitive.Never
                  }
                | {
                      capitalize?: Resolut.Primitive.Boolean
                      uppercase?: Resolut.Primitive.Never
                      lowercase?: Resolut.Primitive.Never
                  }

            type FlexDirection =
                | {
                      vertical: true
                      horizontal: Resolut.Primitive.Never
                  }
                | {
                      horizontal: true
                      vertical: Resolut.Primitive.Never
                  }
        }

        namespace Primitive {
            type String = string

            namespace String {
                type Suggestions<T> = T | (string & {})

                type AllowNumeric = string | number

                namespace AllowNumeric {
                    type Suggestions<T> = T | (string & {}) | (number & {})
                }
            }

            type Boolean = boolean

            type Number = number

            type Never = never
        }
    }
}

export {}
