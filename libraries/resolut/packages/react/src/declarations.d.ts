declare global {
    namespace Resolut {
        type Component<T = {}> = React.MemoExoticComponent<React.ForwardRefExoticComponent<T>>

        type Element = React.ElementType<any>

        namespace Component {
            type Ref<T> = React.RefAttributes<T>

            type GenericProps<T extends Resolut.Element> = Omit<
                React.ComponentPropsWithoutRef<T>,
                'unselectable' | 'className'
            > &
                Resolut.Props.BaseProps

            type BaseProps = GenericProps<Resolut.Element> & Resolut.Props.BuilderProps

            type LayoutProps = GenericProps<Resolut.Attribute.Layout.Element> &
                Resolut.Props.LayoutProps &
                Resolut.Props.BuilderProps

            type ArticleProps = GenericProps<'article'> & Resolut.Props.LayoutProps & Resolut.Props.ArticleProps

            type BodyProps = GenericProps<'body'> & Resolut.Props.LayoutProps & Resolut.Props.BodyProps

            type DivProps = GenericProps<'div'> & Resolut.Props.LayoutProps & Resolut.Props.DivProps

            type FieldProps = GenericProps<'div'> & Resolut.Props.LayoutProps & Resolut.Props.FieldProps

            type FormProps = GenericProps<'form'> & Resolut.Props.LayoutProps & Resolut.Props.FormProps

            type MainProps = GenericProps<'main'> & Resolut.Props.LayoutProps & Resolut.Props.MainProps

            type SectionProps = GenericProps<'section'> & Resolut.Props.LayoutProps & Resolut.Props.SectionProps

            type TypographyProps = GenericProps<Resolut.Attribute.Typography.Element> &
                Resolut.Props.TypographyProps &
                Resolut.Props.BuilderProps

            type ButtonProps = GenericProps<'button'> & Resolut.Props.TypographyProps & Resolut.Props.ButtonProps

            type HeadingProps = GenericProps<Resolut.Attribute.Typography.Heading.Element> &
                Resolut.Props.TypographyProps &
                Resolut.Props.HeadingProps

            type LabelProps = Omit<GenericProps<'label'>, 'htmlFor'> &
                Resolut.Props.TypographyProps &
                Resolut.Props.LabelProps

            type LinkProps = GenericProps<'link'> & Resolut.Props.TypographyProps & Resolut.Props.LinkProps

            type ParagraphProps = GenericProps<'p'> & Resolut.Props.TypographyProps & Resolut.Props.ParagraphProps

            type SpanProps = GenericProps<'span'> & Resolut.Props.TypographyProps & Resolut.Props.SpanProps

            type InputProps = GenericProps<Resolut.Attribute.Input.Element> &
                Resolut.Props.InputProps &
                Resolut.Props.BuilderProps

            type SelectProps = GenericProps<'select'> & Resolut.Props.InputProps & Resolut.Props.SelectProps

            type TextProps = GenericProps<'input'> & Resolut.Props.InputProps & Resolut.Props.TextProps
        }

        namespace Events {
            type SubmitEvent = React.FormEvent<HTMLFormElement>

            type ButtonClickEvent = (event: React.MouseEvent<HTMLButtonElement>) => void
        }
    }
}

export {}
