import Utils from '../../utils'
import { FieldComponent } from './field.component.types'

const Field: FieldComponent = memo(
    forwardRef(({ children, className, style, row = 'unset', column = 'unset', ...props }, forwardedRef) => {
        return createElement(
            'div',
            {
                ref: forwardedRef,
                style: { ...style, gridRow: Utils.evaluateGrid(row), gridColumn: Utils.evaluateGrid(column) },
                className: Utils.setClasses(className, 'resolut-field'),
                ...props
            },
            children
        )
    })
)

export default Field
