import Input from '../input/input.component'
import { SelectComponent } from './select.component.types'

const Select: SelectComponent = memo(
    forwardRef(({ options, ...props }, ref) => {
        return createElement(
            Input,
            {
                tag: 'select',
                element: 'select',
                ref,
                ...props
            },
            options &&
                options.map(({ value, name }) =>
                    createElement('option', { className: 'resolut-option', value: value, key: name + value }, name)
                )
        )
    })
)

export default Select
