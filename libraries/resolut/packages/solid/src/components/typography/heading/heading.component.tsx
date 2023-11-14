import Typography from '../typography/typography.component'
import HeadingComponent from './heading.component.types'
import Utils from '../../../../../../utils'

const Heading: HeadingComponent = memo(
    forwardRef(({ heading, subheading, section, subsection, fluid, children, ...props }, ref) => {
        return createElement(
            Typography,
            {
                tag: 'heading',
                ...Utils.setAttributes({
                    headingVariant:
                        Utils.setValueFromBoolean({ heading, subheading, section, subsection }) || 'subheading',
                    fluid
                }),
                element: Utils.setHeadingElementFromVariant(
                    Utils.setValueFromBoolean({ heading, subheading, section, subsection }) as any
                ),
                ref,
                ...props
            },
            children
        )
    })
)

export default Heading
