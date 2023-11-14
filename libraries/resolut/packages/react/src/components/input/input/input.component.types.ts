export type InputProps = Omit<Resolut.Component.Props.Input<'input' | 'select'>, 'id'> & {
    element: React.ElementType<any>
    tag: string
}

export type InputRef = Resolut.Component.Ref<HTMLInputElement | HTMLSelectElement>

export type InputComponent = Resolut.Component<InputProps & InputRef>

export default InputComponent
