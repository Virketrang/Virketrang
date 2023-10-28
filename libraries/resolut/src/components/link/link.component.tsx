import Utils from '../../utils'
import { LinkComponent } from './link.component.types'

const Link: LinkComponent = memo(
    forwardRef(({ underlined = true, margin, style, className, children, ...props }, ref) => {
        return createElement(
            'a',
            {
                ref,
                style: { ...Utils.setInlineStyles({ margin }), ...style },
                className: Utils.setClasses('resolut-link', className),
                ...Utils.setAttributes({ underlined, margin: !!margin }),
                ...props
            },
            children
        )
    })
)

export default Link
