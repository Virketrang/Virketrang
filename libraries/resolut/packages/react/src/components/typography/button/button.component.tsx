import Typography from '../typography/typography.component'
import ButtonComponent, { ButtonProps } from './button.component.types'

const Button: ButtonComponent = Resolut.create<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
    (
        {
            square,
            circle,
            round,
            rounded,
            submit,
            type,
            small,
            medium,
            large,
            elevated,
            children,
            wide,
            /** @inject ref, **/
            ...props
        } /** @remove start **/,
        ref /** @remove end **/
    ) => {
        return (
            <Typography
                ref={ref}
                tag="button"
                type={submit ? 'submit' : type}
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
