declare global {
    namespace Resolut {
        namespace Props {
            type BaseProps = {
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
            } & Resolut.Attribute.Cursor

            type LayoutProps = {
                gap?: Resolut.Primitive.String
                center?: Resolut.Primitive.Boolean
                align?: Resolut.Primitive.String
            } & Resolut.Attribute.Layout.Grid &
                Resolut.Attribute.Layout.Flex

            type ArticleProps = {}

            type BodyProps = {}

            type DivProps = {}

            type FieldProps = { message?: Resolut.Primitive.String }

            type FormProps = {
                preventDefault?: Resolut.Primitive.Boolean
                onSubmit?: (event: Resolut.Events.SubmitEvent) => void
            }

            type MainProps = {}

            type SectionProps = {}

            type HeaderProps = {}

            type NavProps = {}

            type FooterProps = {}

            type TypographyProps = {
                letterSpacing?: Resolut.Primitive.String
                lineHeight?: Resolut.Primitive.String
                fontSize?: Resolut.Primitive.String
                decorationColor?: Resolut.Primitive.String
                decorationThickness?: Resolut.Primitive.String
                italic?: Resolut.Primitive.Boolean
                fluid?: Resolut.Primitive.Boolean
                for?: Resolut.Primitive.String
            } & Resolut.Attribute.Typography.Casing &
                Resolut.Attribute.Typography.TextWrap &
                Resolut.Attribute.Typography.TextAlign &
                Resolut.Attribute.Color &
                Resolut.Attribute.Typography.FontWeight &
                Resolut.Attribute.Typography.DecorationLine &
                Resolut.Attribute.Typography.DecorationStyle

            type ButtonProps = {
                elevated?: Resolut.Primitive.Boolean
                wide?: Resolut.Primitive.Boolean
                disabled?: Resolut.Primitive.Boolean
                loading?: Resolut.Primitive.Boolean
                iconPosition?: Resolut.Attribute.IconPosition
            } & Resolut.Attribute.Shape &
                Resolut.Attribute.Size &
                Resolut.Attribute.Typography.Button.ActionProps

            type HeadingProps = {} & Resolut.Attribute.Typography.Heading.TitleVariant

            type LabelProps = {
                size?: Resolut.Attribute.Size
                required?: Resolut.Primitive.Boolean

                for?: Resolut.Primitive.String
            }

            type LinkProps = {}

            type ParagraphProps = {}

            type SpanProps = {}

            type InputProps = {
                elevated?: Resolut.Primitive.Boolean
                disabled?: Resolut.Primitive.Boolean
                error?: Resolut.Primitive.Boolean
            } & Resolut.Attribute.Size &
                Omit<Resolut.Attribute.Shape, 'circle'>

            type TextProps = { children?: Resolut.Primitive.Never } & Resolut.Attribute.Input.Text.Type

            type SelectProps = { children?: Resolut.Primitive.Never; options?: Resolut.Attribute.Input.Select.Option[] }

            type BuilderProps = {
                element: Resolut.Element
                tag: string
            }
        }

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
                'cursor:pointer'?: Resolut.Primitive.Boolean
                'cursor:grab'?: Resolut.Primitive.Boolean
                'cursor:grabbing'?: Resolut.Primitive.Boolean
                'cursor:default'?: Resolut.Primitive.Boolean
                'cursor:text'?: Resolut.Primitive.Boolean
                'cursor:wait'?: Resolut.Primitive.Boolean
                'cursor:move'?: Resolut.Primitive.Boolean
                'cursor:notAllowed'?: Resolut.Primitive.Boolean
                'cursor:help'?: Resolut.Primitive.Boolean
                'cursor:crosshair'?: Resolut.Primitive.Boolean
                'cursor:progress'?: Resolut.Primitive.Boolean
                'cursor:none'?: Resolut.Primitive.Boolean
                'cursor:auto'?: Resolut.Primitive.Boolean
                'cursor:contextMenu'?: Resolut.Primitive.Boolean
                'cursor:cell'?: Resolut.Primitive.Boolean
                'cursor:verticalText'?: Resolut.Primitive.Boolean
                'cursor:alias'?: Resolut.Primitive.Boolean
                'cursor:copy'?: Resolut.Primitive.Boolean
                'cursor:noDrop'?: Resolut.Primitive.Boolean
                'cursor:allScroll'?: Resolut.Primitive.Boolean
                'cursor:colResize'?: Resolut.Primitive.Boolean
                'cursor:rowResize'?: Resolut.Primitive.Boolean
                'cursor:nResize'?: Resolut.Primitive.Boolean
                'cursor:eResize'?: Resolut.Primitive.Boolean
                'cursor:sResize'?: Resolut.Primitive.Boolean
                'cursor:wResize'?: Resolut.Primitive.Boolean
                'cursor:neResize'?: Resolut.Primitive.Boolean
                'cursor:nwResize'?: Resolut.Primitive.Boolean
                'cursor:seResize'?: Resolut.Primitive.Boolean
                'cursor:swResize'?: Resolut.Primitive.Boolean
                'cursor:ewResize'?: Resolut.Primitive.Boolean
                'cursor:nsResize'?: Resolut.Primitive.Boolean
                'cursor:neswResize'?: Resolut.Primitive.Boolean
                'cursor:nwseResize'?: Resolut.Primitive.Boolean
                'cursor:zoomIn'?: Resolut.Primitive.Boolean
                'cursor:zoomOut'?: Resolut.Primitive.Boolean
            }

            type IconPosition = 'before' | 'after'

            namespace Input {
                type Element = 'input' | 'select'

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

                    type Element = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
                }

                namespace Button {
                    type ActionProps =
                        | {
                              onClick?: Resolut.Events.ButtonClickEvent
                              submit?: Resolut.Primitive.Boolean
                              href?: Resolut.Primitive.Never
                          }
                        | {
                              onClick?: Resolut.Primitive.Never
                              submit?: Resolut.Primitive.Never
                              href?: Resolut.Primitive.String
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
