export type InputProps = Omit<Resolut.Component.InputProps<'input' | 'select'>, 'id'> & {
    element: 'input' | 'select'
    tag: string
}

export default InputProps
