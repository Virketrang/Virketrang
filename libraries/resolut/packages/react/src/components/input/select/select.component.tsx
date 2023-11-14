import Input from '../input/input.component'
import { SelectComponent, SelectProps } from './select.component.types'

const Select: SelectComponent = Resolut.create<HTMLSelectElement, SelectProps>(
    ({ options, /** @inject ref, **/ ...props } /** @remove start **/, ref /** @remove end **/) => {
        return (
            <Input tag="select" element="select" ref={ref} {...props}>
                {options &&
                    options.map(({ value, name }) =>
                        createElement('option', { className: 'resolut-option', value: value, key: name + value }, name)
                    )}
            </Input>
        )
    }
)

export default Select
