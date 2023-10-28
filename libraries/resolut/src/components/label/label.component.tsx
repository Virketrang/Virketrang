import Utils from '../../utils'
import { LabelComponent } from './label.component.types'

const Label: LabelComponent = memo(
    forwardRef(
        (
            {
                size = 'large',
                stretch = false,
                children,
                className = '',
                required = false,
                uppercase = false,
                lowercase = false,
                capitalize = false,
                ...props
            },
            forwardedRef
        ) => {
            const casing = Utils.setCase(uppercase, lowercase, capitalize)

            return createElement(
                'label',
                {
                    ref: forwardedRef,
                    className: Utils.setClasses(className, 'resolut-label'),
                    ...props,
                    ...Utils.setAttributes({ size, stretch, required, casing })
                },
                children
            )
        }
    )
)

export default Label
