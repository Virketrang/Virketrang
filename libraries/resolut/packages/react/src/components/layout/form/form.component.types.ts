export type FormProps = Resolut.Component.Props.Layout<'form'> & {
    preventDefault?: Resolut.Primitive.Boolean
}

export type FormRef = Resolut.Component.Ref<HTMLFormElement>

export type FormComponent = Resolut.Component<FormProps & FormRef>

export default FormComponent
