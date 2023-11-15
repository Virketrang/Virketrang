export type ActionProps =
    | {
          onClick?: Resolut.Events.ButtonClickEvent
          submit?: Resolut.Primitive.Boolean
          href?: Resolut.Primitive.Never
      }
    | { onClick?: Resolut.Primitive.Never; submit?: Resolut.Primitive.Never; href?: Resolut.Primitive.String }

export type ButtonProps = Resolut.Component.TypographyProps<'button' | 'a'> & {
    children: Resolut.Primitive.String
    elevated?: Resolut.Primitive.Boolean
    wide?: Resolut.Primitive.Boolean
    disabled?: Resolut.Primitive.Boolean
    loading?: Resolut.Primitive.Boolean
    iconPosition?: Resolut.Attribute.IconPosition
} & Resolut.Attribute.Shape &
    Resolut.Attribute.Size &
    ActionProps

export default ButtonProps
