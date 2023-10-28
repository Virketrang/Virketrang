export interface FieldProps extends Resolut.Component.Props.Layout<'div'> {
    row?: 'span-all' | (string & {}) | (number & {})
    column?: 'span-all' | (string & {}) | (number & {})
}

export type FieldRef = React.RefAttributes<HTMLDivElement>

export type FieldComponent = React.MemoExoticComponent<React.ForwardRefExoticComponent<FieldProps & FieldRef>>
