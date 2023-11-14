import Base from '../../base/base.component'
import InputComponent from './input.component.types'

import Utils from '../../../../../../utils'

const Input: InputComponent = memo(
    forwardRef(
        (
            {
                large,
                medium,
                small,
                round,
                rounded,
                square,
                name,
                elevated,
                disabled,
                error,
                children,
                className,
                ...props
            },
            ref
        ) => {
            return createElement(
                Base,
                {
                    ref,
                    name,
                    id: name,
                    ...Utils.setAttributes({
                        size: Utils.setValueFromBoolean({ small, medium, large }) || 'large',
                        shape: Utils.setValueFromBoolean({ round, rounded, square }),
                        error,
                        elevated
                    }),
                    className: Utils.setClasses('resolut-input', className),
                    ...props
                },
                children
            )
        }
    )
)

export default Input
