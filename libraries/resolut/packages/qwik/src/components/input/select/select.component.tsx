import { component$ } from '@builder.io/qwik'
import Input from '../input/input.component'

const Select = component$(({ options, ...props }: Resolut.Component.SelectProps) => {
    return (
        <Input tag="select" element="select" {...props}>
            {options &&
                options.map(({ value, name }) => (
                    <option value={value} key={name + value} class="resolut-option">
                        {name}
                    </option>
                ))}
        </Input>
    )
})

export default Select
