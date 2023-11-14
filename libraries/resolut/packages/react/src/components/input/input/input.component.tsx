import Base from '../../base/base.component'
import { InputProps, InputComponent } from './input.component.types'

const Input: InputComponent = Resolut.create<HTMLInputElement | HTMLSelectElement, InputProps>(
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
        return (
            <Base
                ref={ref}
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
