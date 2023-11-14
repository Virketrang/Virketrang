import Typography from '../typography/typography.component'
import HeadingComponent, { HeadingProps } from './heading.component.types'

const Heading: HeadingComponent = Resolut.create<HTMLHeadingElement, HeadingProps>(
    (
        {
            heading,
            subheading,
            section,
            subsection,
            fluid,
            children,
            /** @inject ref, **/ ...props
        } /** @remove start **/,
        ref /** @remove end **/
    ) => {
        return (
            <Typography
                tag="heading"
                {...Utils.setAttributes({
                    headingVariant:
                        Utils.setValueFromBoolean({ heading, subheading, section, subsection }) || 'subheading',
                    fluid
                })}
                element={Utils.setHeadingElementFromVariant(
                    Utils.setValueFromBoolean({ heading, subheading, section, subsection }) as any
                )}
                ref={ref}
                {...props}
            >
                {children}
            </Typography>
        )
    }
)

export default Heading
