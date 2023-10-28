export type SharedProps = {
    color?: Resolut.Attribute.Color
    children: Resolut.Primitive.String
    shape?: Resolut.Attribute.Shape
    stretch?: Resolut.Primitive.Boolean
    size?: Resolut.Attribute.Size
    sizing?: Resolut.Attribute.Sizing
    elevated?: Resolut.Primitive.Boolean
    wide?: Resolut.Primitive.Boolean
    disabled?: Resolut.Primitive.Boolean
    loading?: Resolut.Primitive.Boolean
    icon?: React.ReactElement
    iconPosition?: 'before' | 'after'
    width?: Resolut.Primitive.String
    height?: Resolut.Primitive.String
    row?: 'span-all' | (string & {}) | (number & {})
    column?: 'span-all' | (string & {}) | (number & {})
}

export type ButtonElementProps = Omit<React.ComponentPropsWithoutRef<'button'>, 'onClick'>

export type AnchorElementProps = Omit<React.ComponentPropsWithoutRef<'a'>, 'href'>

export type ButtonProps =
    | (SharedProps & {
          onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
          href?: never
      } & ButtonElementProps)
    | (SharedProps & { onClick?: never; href?: string } & AnchorElementProps)

export type ButtonRef = React.RefAttributes<HTMLButtonElement | HTMLAnchorElement>

export type ButtonComponent = React.MemoExoticComponent<React.ForwardRefExoticComponent<ButtonProps & ButtonRef>>
