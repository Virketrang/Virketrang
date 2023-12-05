import { Component as QwikComponent, CSSProperties, QwikIntrinsicElements } from '@builder.io/qwik'

declare global {
    namespace Resolut {
        type Component<T> = QwikComponent<T>

        type Element = keyof QwikIntrinsicElements

        type CSSProperties = CSSProperties

        namespace Component {
            type GenericProps<T extends keyof QwikIntrinsicElements> = QwikIntrinsicElements[T] &
                Resolut.Props.BaseProps

            type BaseProps<C extends keyof QwikIntrinsicElements> = GenericProps<C> & { element: C; tag: string }

            type LayoutProps = GenericProps<
                'form' | 'section' | 'header' | 'footer' | 'main' | 'article' | 'body' | 'div' | 'nav' | 'ul'
            > &
                Resolut.Props.LayoutProps & {
                    element:
                        | 'form'
                        | 'section'
                        | 'header'
                        | 'footer'
                        | 'main'
                        | 'article'
                        | 'body'
                        | 'div'
                        | 'nav'
                        | 'ul'
                    tag: string
                }

            type ArticleProps = GenericProps<'article'> & Resolut.Props.LayoutProps & Resolut.Props.ArticleProps

            type BodyProps = GenericProps<'body'> & Resolut.Props.LayoutProps & Resolut.Props.BodyProps

            type DivProps = GenericProps<'div'> & Resolut.Props.LayoutProps & Resolut.Props.DivProps

            type FieldProps = GenericProps<'div'> & Resolut.Props.LayoutProps & Resolut.Props.FieldProps

            type FormProps = GenericProps<'form'> & Resolut.Props.LayoutProps & Resolut.Props.FormProps

            type MainProps = GenericProps<'main'> & Resolut.Props.LayoutProps & Resolut.Props.MainProps

            type SectionProps = GenericProps<'section'> & Resolut.Props.LayoutProps & Resolut.Props.SectionProps

            type HeaderProps = GenericProps<'header'> & Resolut.Props.LayoutProps & Resolut.Props.HeaderProps

            type NavProps = GenericProps<'nav'> & Resolut.Props.LayoutProps & Resolut.Props.NavProps

            type FooterProps = GenericProps<'footer'> & Resolut.Props.LayoutProps & Resolut.Props.FooterProps

            type TypographyProps = GenericProps<
                'button' | 'a' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label' | 'p' | 'span'
            > &
                Resolut.Props.TypographyProps &
                Resolut.Props.BuilderProps

            type ButtonProps = GenericProps<'button' | 'anchor'> &
                Resolut.Props.TypographyProps &
                Resolut.Props.ButtonProps

            type HeadingProps = GenericProps<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'> &
                Resolut.Props.TypographyProps &
                Resolut.Props.HeadingProps

            type LabelProps = GenericProps<'label'> & Resolut.Props.TypographyProps & Resolut.Props.LabelProps

            type LinkProps = GenericProps<'a'> & Resolut.Props.TypographyProps & Resolut.Props.LinkProps

            type ParagraphProps = GenericProps<'p'> & Resolut.Props.TypographyProps & Resolut.Props.ParagraphProps

            type SpanProps = GenericProps<'span'> & Resolut.Props.TypographyProps & Resolut.Props.SpanProps

            type InputProps = GenericProps<'input' | 'select'> & Resolut.Props.InputProps & Resolut.Props.BuilderProps

            type SelectProps = GenericProps<'select'> & Resolut.Props.InputProps & Resolut.Props.SelectProps

            type TextProps = GenericProps<'input'> & Resolut.Props.InputProps & Resolut.Props.TextProps
        }

        namespace Events {
            type SubmitEvent = Event & {
                submitter: HTMLElement
            } & {
                currentTarget: 'form'
                target: Element
            }

            type ButtonClickEvent = MouseEvent & {
                currentTarget: HTMLButtonElement
                target: Element
            }
        }
    }
}

export {}
