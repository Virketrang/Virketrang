import Input from '../input/input.component'

const Select: Resolut.Component<Resolut.Component.SelectProps> = ({ options, ref, ...props }) => {
    return (
        <Input tag="select" element="select" ref={ref} {...props}>
            {/* {options &&
                options.map(({ value, name }) => (
                    <option class="resolut-option" value={value}>
                        {name}
                    </option>
                ))} */}
        </Input>
    )
}

export default Select
