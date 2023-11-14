import Utils from '../../../../../../utils'
import Typography from '../typography/typography.component'
import { LinkComponent } from './link.component.types'

const Link: LinkComponent = memo(
    forwardRef(({ underlined = true, children, ...props }, ref) => {
        return createElement(
            Typography,
            {
                ref,
                tag: 'link',
                element: 'a',
                ...Utils.setAttributes({ underlined }),
                ...props
            },
            children
        )
    })
)

export default Link
