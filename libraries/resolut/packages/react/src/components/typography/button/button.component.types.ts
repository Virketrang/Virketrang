export type ActionProps =
    | {
          onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
          submit?: Resolut.Primitive.Boolean
          href?: Resolut.Primitive.Never
      }
    | { onClick?: Resolut.Primitive.Never; submit?: Resolut.Primitive.Never; href?: Resolut.Primitive.String }

export type ButtonProps = Resolut.Component.Props.Typography<'button' | 'a'> & {
    children: Resolut.Primitive.String
    elevated?: Resolut.Primitive.Boolean
    wide?: Resolut.Primitive.Boolean
    disabled?: Resolut.Primitive.Boolean
    loading?: Resolut.Primitive.Boolean
    icon?: React.ReactElement
    iconPosition?: Resolut.Attribute.IconPosition
} & Resolut.Attribute.Shape &
    Resolut.Attribute.Size &
    ActionProps

export type ButtonRef = Resolut.Component.Ref<HTMLButtonElement | HTMLAnchorElement>

export type ButtonComponent = Resolut.Component<ButtonProps & ButtonRef>

export default ButtonComponent
