export type FormProps = Resolut.Component.Props.Layout<'form'> & {
    preventDefault?: Resolut.Primitive.Boolean
}

export type FormRef = React.RefAttributes<HTMLElement>

export type FormComponent = React.MemoExoticComponent<React.ForwardRefExoticComponent<FormProps & FormRef>>

export default FormComponent
