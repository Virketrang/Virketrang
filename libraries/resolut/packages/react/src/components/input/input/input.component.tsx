import Base from '../../base/base.component'

const Input = Resolut.create<HTMLInputElement | HTMLSelectElement, Resolut.Component.InputProps>(
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
            class: className,
            /** @inject ref, **/
            ...props
        } /** @remove start **/,
        ref /** @remove end **/
    ) => {
        const _ = ref as any

        return (
            <Base
                ref={_}
                // @ts-ignore
                name={name}
                id={name}
                {...Utils.setAttributes({
                    size: Utils.setValueFromBoolean({ small, medium, large }) || 'large',
                    shape: Utils.setValueFromBoolean({ round, rounded, square }),
                    error,
                    elevated
                })}
                class={Utils.setClasses('resolut-input', className)}
                {...props}
            >
                {children}
            </Base>
        )
    }
)

export default Input
