import Utils from '../../utils'
import { ButtonComponent } from './button.component.types'

const Button: ButtonComponent = memo(
    forwardRef(
        (
            {
                color = 'primary',
                shape = 'square',
                stretch = false,
                size = 'medium',
                sizing = 'fixed',
                elevated = true,
                style,
                children,
                className,
                row = 'unset',
                column = 'unset',
                wide = false,
                width,
                height,
                ...props
            },
            forwardedRef
        ) => {
            const ref = forwardedRef as any

            return createElement(
                props.href ? 'a' : 'button',
                {
                    className: Utils.setClasses(className, 'resolut-button'),
                    ref: ref,
                    style: {
                        ...Utils.setInlineStyles({
                            width,
                            height,
                            gridRow: Utils.evaluateGrid(row),
                            gridColumn: Utils.evaluateGrid(stretch ? 'span-all' : column)
                        }),
                        ...style
                    },
                    ...Utils.setAttributes({
                        color,
                        shape,
                        size,
                        sizing,
                        elevated,
                        wide,
                        stretch: row !== 'unset' || column !== 'unset' ? true : stretch
                    }),
                    ...props
                },
                children
            )
        }
    )
)

export default Button
