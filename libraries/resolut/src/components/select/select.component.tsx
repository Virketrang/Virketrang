import Utils from '../../utils'
import { SelectComponent } from './select.component.types'

const Select: SelectComponent = memo(
    forwardRef(
        (
            {
                maxLength,
                size = 'large',
                stretch = false,
                options,
                className = '',
                shape = 'square',
                elevated = true,
                ...props
            },
            forwardedRef
        ) => {
            return createElement(
                'select',
                {
                    className: Utils.setClasses('resolut-select', className),
                    size: maxLength,
                    ref: forwardedRef,
                    ...props,
                    ...Utils.setAttributes({ size, stretch, elevated, shape })
                },
                options &&
                    options.map(({ value, name }) =>
                        createElement('option', { className: 'resolut-option', value: value, key: name + value }, name)
                    )
            )
        }
    )
)

export default Select
