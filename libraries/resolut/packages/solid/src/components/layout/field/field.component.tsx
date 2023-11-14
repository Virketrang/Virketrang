import Layout from '../layout/layout.component'
import { FieldComponent } from './field.component.types'

import Utils from '../../../../../../utils'

const Field: FieldComponent = memo(
    forwardRef(({ message, children, ...props }, ref) => {
        return createElement(
            Layout,
            {
                ref,
                tag: 'field',
                ...Utils.setAttributes({ message }),
                element: 'div',
                ...props
            },
            children
        )
    })
)

export default Field
