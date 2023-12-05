import { component$ } from '@builder.io/qwik'
import Typography from '../typography/typography.component'

const Button = component$(
    ({
        square,
        circle,
        round,
        rounded,
        submit,
        small,
        type,
        medium,
        large,
        elevated,
        children,
        wide,
        ...props
    }: Resolut.Component.ButtonProps) => {
        return (
            <Typography
                type={submit ? 'submit' : type || 'button'}
                tag="button"
                element={props.href ? 'a' : 'button'}
                {...Utils.setAttributes({
                    shape: Utils.setValueFromBoolean({ circle, square, round, rounded }),
                    size: Utils.setValueFromBoolean({ small, medium, large }) || 'large',
                    elevated,
                    wide
                })}
                {...props}
            >
                {children}
            </Typography>
        )
    }
)

export default Button
