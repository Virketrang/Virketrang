import { For } from 'solid-js'
import Input from '../input/input.component'

const Select: Resolut.Component<Resolut.Component.SelectProps> = ({ options, ref, ...props }) => {
    return (
        <Input tag="select" element="select" ref={ref} {...props}>
            <For each={options}>
                {({ value, name }) => (
                    <option class="resolut-option" value={value}>
                        {name}
                    </option>
                )}
            </For>
        </Input>
    )
}

export default Select
