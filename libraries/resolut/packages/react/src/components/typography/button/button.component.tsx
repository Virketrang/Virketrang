import Typography from '../typography/typography.component'

const Button = Resolut.create<HTMLButtonElement | HTMLAnchorElement, Resolut.Component.ButtonProps>(
    (
        {
            square,
            circle,
            round,
            rounded,
            submit,
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
