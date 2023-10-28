import Utils from '../../utils'
import { InputComponent } from './input.component.types'

const Input: InputComponent = memo(
    forwardRef(
        (
            {
                className = '',
                size = 'large',
                maxLength,
                name,
                stretch = false,
                shape = 'square',
                elevated = true,
                autoComplete = 'off',
                ...props
            },
            forwardedRef
        ) => {
            return createElement(
                'input',
                {
                    size: maxLength,
                    name,
                    id: name,
                    autoComplete: autoComplete,
                    className: Utils.setClasses('resolut-input', className),
                    ref: forwardedRef,
                    ...props,
                    ...Utils.setAttributes({ size, stretch, shape, elevated })
                },
                null
            )
        }
    )
)

export default Input
