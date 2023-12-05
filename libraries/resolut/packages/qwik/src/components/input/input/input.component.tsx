import { component$ } from '@builder.io/qwik'
import Base from '../../base/base.component'

const Input = component$(
    ({
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
        ...props
    }: Resolut.Component.InputProps) => {
        return (
            <Base
                name={name}
                id={name}
                {...Utils.setAttributes({
                    size: Utils.setValueFromBoolean({ small, medium, large }) || 'large',
                    shape: Utils.setValueFromBoolean({ round, rounded, square }),
                    error,
                    elevated
                })}
                class={Utils.setClasses('resolut-input', className)}
                {...(props as any)}
            >
                <Slot />
            </Base>
        )
    }
)

export default Input
