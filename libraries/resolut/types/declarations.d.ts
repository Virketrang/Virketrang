declare global {
    namespace Resolut {
        namespace Attribute {
            type Size = {
                small?: Resolut.Primitive.Boolean
                medium?: Resolut.Primitive.Boolean
                large?: Resolut.Primitive.Boolean
            }

            type Color = { primary?: Resolut.Primitive.Boolean; secondary?: Resolut.Primitive.Boolean }

            type Shape = {
                round?: Resolut.Primitive.Boolean
                rounded?: Resolut.Primitive.Boolean
                square?: Resolut.Primitive.Boolean
                circle?: Resolut.Primitive.Boolean
            }

            type Position = {
                fixed?: Resolut.Primitive.Boolean
                relative?: Resolut.Primitive.Boolean
                absolute?: Resolut.Primitive.Boolean
                sticky?: Resolut.Primitive.Boolean
            }

            type Cursor = {
                pointer?: Resolut.Primitive.Boolean
                grab?: Resolut.Primitive.Boolean
                grabbing?: Resolut.Primitive.Boolean
                browserDefault?: Resolut.Primitive.Boolean
                text?: Resolut.Primitive.Boolean
                wait?: Resolut.Primitive.Boolean
                move?: Resolut.Primitive.Boolean
                notAllowed?: Resolut.Primitive.Boolean
                help?: Resolut.Primitive.Boolean
                crosshair?: Resolut.Primitive.Boolean
                progress?: Resolut.Primitive.Boolean
                none?: Resolut.Primitive.Boolean
                auto?: Resolut.Primitive.Boolean
                contextMenu?: Resolut.Primitive.Boolean
                cell?: Resolut.Primitive.Boolean
                verticalText?: Resolut.Primitive.Boolean
                alias?: Resolut.Primitive.Boolean
                copy?: Resolut.Primitive.Boolean
                noDrop?: Resolut.Primitive.Boolean
                allScroll?: Resolut.Primitive.Boolean
                colResize?: Resolut.Primitive.Boolean
                rowResize?: Resolut.Primitive.Boolean
                nResize?: Resolut.Primitive.Boolean
                eResize?: Resolut.Primitive.Boolean
                sResize?: Resolut.Primitive.Boolean
                wResize?: Resolut.Primitive.Boolean
                neResize?: Resolut.Primitive.Boolean
                nwResize?: Resolut.Primitive.Boolean
                seResize?: Resolut.Primitive.Boolean
                swResize?: Resolut.Primitive.Boolean
                ewResize?: Resolut.Primitive.Boolean
                nsResize?: Resolut.Primitive.Boolean
                neswResize?: Resolut.Primitive.Boolean
                nwseResize?: Resolut.Primitive.Boolean
                zoomIn?: Resolut.Primitive.Boolean
                zoomOut?: Resolut.Primitive.Boolean
            }

            type IconPosition = 'before' | 'after'

            namespace Input {
                namespace Select {
                    type Option = { value: Resolut.Primitive.String; name: Resolut.Primitive.String }
                }

                namespace Text {
                    type Type = {
                        url?: Resolut.Primitive.Boolean
                        email?: Resolut.Primitive.Boolean
                        tel?: Resolut.Primitive.Boolean
                        password?: Resolut.Primitive.Boolean
                        number?: Resolut.Primitive.Boolean
                    }
                }
            }

            namespace Layout {
                type Element = 'div' | 'section' | 'article' | 'main' | 'form' | 'body'

                type Grid =
                    | {
                          grid?: true
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
                          flex?: true
                          grid?: Resolut.Primitive.Never
                          reverse?: Resolut.Primitive.Boolean
                      } & Resolut.Attribute.Layout.FlexDirection &
                          Resolut.Attribute.Layout.AlignItems<Resolut.Primitive.Boolean> &
                          Resolut.Attribute.Layout.JustifyContent<Resolut.Primitive.Boolean>)
                    | ({
                          flex?: false
                          grid?: Resolut.Primitive.Boolean
                          reverse?: Resolut.Primitive.Never
                          direction?: Resolut.Primitive.Never
                          vertical?: Resolut.Primitive.Never
                          horizontal?: Resolut.Primitive.Never
                      } & Resolut.Attribute.Layout.AlignItems<Resolut.Primitive.Never> &
                          Resolut.Attribute.Layout.JustifyContent<Resolut.Primitive.Never>)

                type GridArea = Resolut.Primitive.String.AllowNumeric.Suggestions<'span-all'>

                type FlexDirection = {
                    vertical?: Resolut.Primitive.Boolean
                    horizontal?: Resolut.Primitive.Boolean
                }

                type AlignItems<T extends Resolut.Primitive.Boolean | Resolut.Primitive.Never> = {
                    'align:start'?: T
                    'align:end'?: T
                    'align:center'?: T
                    'align:stretch'?: T
                    'align:baseline'?: T
                }

                type JustifyContent<T extends Resolut.Primitive.Boolean | Resolut.Primitive.Never> = {
                    'justify:start'?: T
                    'justify:end'?: T
                    'justify:center'?: T
                    'justify:between'?: T
                    'justify:around'?: T
                    'justify:evenly'?: T
                }
            }

            namespace Typography {
                type Element = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'label' | 'button' | 'a'

                namespace Heading {
                    type TitleVariant = {
                        heading?: Resolut.Primitive.Boolean
                        subheading?: Resolut.Primitive.Boolean
                        section?: Resolut.Primitive.Boolean
                        subsection?: Resolut.Primitive.Boolean
                    }
                }

                type DecorationStyle = {
                    solid?: Resolut.Primitive.Boolean
                    double?: Resolut.Primitive.Boolean
                    dotted?: Resolut.Primitive.Boolean
                    dashed?: Resolut.Primitive.Boolean
                    wavy?: Resolut.Primitive.Boolean
                }

                type DecorationLine = {
                    underline?: Resolut.Primitive.Boolean
                    overline?: Resolut.Primitive.Boolean
                    lineThrough?: Resolut.Primitive.Boolean
                    blink?: Resolut.Primitive.Boolean
                }

                type FontWeight = {
                    thin?: Resolut.Primitive.Boolean
                    extraLight?: Resolut.Primitive.Boolean
                    light?: Resolut.Primitive.Boolean
                    regular?: Resolut.Primitive.Boolean
                    medium?: Resolut.Primitive.Boolean
                    semiBold?: Resolut.Primitive.Boolean
                    bold?: Resolut.Primitive.Boolean
                    extraBold?: Resolut.Primitive.Boolean
                    black?: Resolut.Primitive.Boolean
                }

                type TextAlign = {
                    start?: Resolut.Primitive.Boolean
                    end?: Resolut.Primitive.Boolean
                    justify?: Resolut.Primitive.Boolean
                    center?: Resolut.Primitive.Boolean
                }

                type TextWrap = {
                    wrap?: Resolut.Primitive.Boolean
                    nowrap?: Resolut.Primitive.Boolean
                    balance?: Resolut.Primitive.Boolean
                }

                type Casing = {
                    uppercase?: Resolut.Primitive.Boolean
                    lowercase?: Resolut.Primitive.Boolean
                    capitalize?: Resolut.Primitive.Boolean
                }
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
