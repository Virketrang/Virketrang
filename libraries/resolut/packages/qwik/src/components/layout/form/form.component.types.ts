export type FormProps = Resolut.Component.LayoutProps<'form'> & {
    preventDefault?: Resolut.Primitive.Boolean
    onSubmit?: (event: Resolut.Events.SubmitEvent) => void
}

export default FormProps
