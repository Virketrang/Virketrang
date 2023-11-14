export type TextProps = Resolut.Component.Props.Input<'input'> & {
    children?: Resolut.Primitive.Never
} & Resolut.Attribute.Input.Text.Type

export type TextRef = Resolut.Component.Ref<HTMLInputElement>

export type TextComponent = Resolut.Component<TextProps & TextRef>

export default TextComponent
