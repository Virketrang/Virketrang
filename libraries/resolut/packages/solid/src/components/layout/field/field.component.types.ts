export type FieldProps = Resolut.Component.Props.Layout<'div'> & { message?: Resolut.Primitive.String }

export type FieldRef = React.RefAttributes<HTMLDivElement>

export type FieldComponent = React.MemoExoticComponent<React.ForwardRefExoticComponent<FieldProps & FieldRef>>
