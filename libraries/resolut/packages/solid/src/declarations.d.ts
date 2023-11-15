import { Component as SolidComponent, JSX, ValidComponent } from 'solid-js'

declare global {
    namespace Resolut {
        type Component<T = {}> = SolidComponent<T>

        type Element = ValidComponent

        namespace Component {
            type GenericProps<T> = Omit<T, 'unselectable' | 'style'> & {
                style?: JSX.CSSProperties
            } & Resolut.Props.BaseProps

            type BaseProps = GenericProps<JSX.HTMLAttributes<HTMLElement>> & Resolut.Props.BuilderProps

            type LayoutProps = GenericProps<JSX.FormHTMLAttributes<HTMLFormElement> | JSX.HTMLAttributes<HTMLElement>> &
                Resolut.Props.LayoutProps &
                Resolut.Props.BuilderProps

            type ArticleProps = GenericProps<JSX.HTMLAttributes<HTMLElement>> &
                Resolut.Props.LayoutProps &
                Resolut.Props.ArticleProps

            type BodyProps = GenericProps<JSX.HTMLAttributes<HTMLElement>> &
                Resolut.Props.LayoutProps &
                Resolut.Props.BodyProps

            type DivProps = GenericProps<JSX.HTMLAttributes<HTMLElement>> &
                Resolut.Props.LayoutProps &
                Resolut.Props.DivProps

            type FieldProps = GenericProps<JSX.HTMLAttributes<HTMLElement>> &
                Resolut.Props.LayoutProps &
                Resolut.Props.FieldProps

            type FormProps = GenericProps<JSX.FormHTMLAttributes<HTMLFormElement>> &
                Resolut.Props.LayoutProps &
                Resolut.Props.FormProps

            type MainProps = GenericProps<JSX.HTMLAttributes<HTMLElement>> &
                Resolut.Props.LayoutProps &
                Resolut.Props.MainProps

            type SectionProps = GenericProps<JSX.HTMLAttributes<HTMLElement>> &
                Resolut.Props.LayoutProps &
                Resolut.Props.SectionProps

            type a = Resolut.Attribute.Typography.Element

            type TypographyProps = GenericProps<
                | JSX.AnchorHTMLAttributes<HTMLAnchorElement>
                | JSX.ButtonHTMLAttributes<HTMLButtonElement>
                | JSX.LabelHTMLAttributes<HTMLLabelElement>
                | JSX.HTMLAttributes<HTMLParagraphElement>
                | JSX.HTMLAttributes<HTMLSpanElement>
                | JSX.HTMLAttributes<HTMLHeadingElement>
            > &
                Resolut.Props.TypographyProps &
                Resolut.Props.BuilderProps

            type ButtonProps = GenericProps<JSX.ButtonHTMLAttributes<HTMLButtonElement>> &
                Resolut.Props.TypographyProps &
                Resolut.Props.ButtonProps

            type HeadingProps = GenericProps<JSX.HTMLAttributes<HTMLHeadingElement>> &
                Resolut.Props.TypographyProps &
                Resolut.Props.HeadingProps

            type LabelProps = GenericProps<JSX.LabelHTMLAttributes<HTMLLabelElement>> &
                Resolut.Props.TypographyProps &
                Resolut.Props.LabelProps

            type LinkProps = GenericProps<JSX.AnchorHTMLAttributes<HTMLAnchorElement>> &
                Resolut.Props.TypographyProps &
                Resolut.Props.LinkProps

            type ParagraphProps = GenericProps<JSX.HTMLAttributes<HTMLParagraphElement>> &
                Resolut.Props.TypographyProps &
                Resolut.Props.ParagraphProps

            type SpanProps = GenericProps<JSX.HTMLAttributes<HTMLSpanElement>> &
                Resolut.Props.TypographyProps &
                Resolut.Props.SpanProps

            type InputProps = GenericProps<
                JSX.InputHTMLAttributes<HTMLInputElement> | JSX.SelectHTMLAttributes<HTMLSelectElement>
            > &
                Resolut.Props.InputProps &
                Resolut.Props.BuilderProps

            type SelectProps = GenericProps<JSX.SelectHTMLAttributes<HTMLSelectElement>> &
                Resolut.Props.InputProps &
                Resolut.Props.SelectProps

            type TextProps = GenericProps<JSX.InputHTMLAttributes<HTMLInputElement>> &
                Resolut.Props.InputProps &
                Resolut.Props.TextProps
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
