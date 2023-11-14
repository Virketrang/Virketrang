import Utils from '../../../../../../utils'
import Typography from '../typography/typography.component'
import ButtonComponent from './button.component.types'

const Button: ButtonComponent = memo(
    forwardRef(
        (
            { square, circle, round, rounded, submit, type, small, medium, large, elevated, children, wide, ...props },
            forwardedRef
        ) => {
            const ref = forwardedRef as any

            return createElement(
                Typography,
                {
                    ref,
                    tag: 'button',
                    type: submit ? 'submit' : type,
                    element: props.href ? 'a' : 'button',
                    ...Utils.setAttributes({
                        shape: Utils.setValueFromBoolean({ circle, square, round, rounded }),
                        size: Utils.setValueFromBoolean({ small, medium, large }) || 'large',
                        elevated,
                        wide
                    }),
                    ...props
                },
                children
            )
        }
    )
)

export default Button
