import Utils from '../../../../../../utils'
import { LabelComponent } from './label.component.types'
import Typography from '../typography/typography.component'

const Label: LabelComponent = memo(
    forwardRef(({ children, required = false, ...props }, ref) => {
        return createElement(
            Typography,
            {
                ref,
                tag: 'label',
                element: 'label',
                ...props,
                ...Utils.setAttributes({ required })
            },
            children
        )
    })
)

export default Label
