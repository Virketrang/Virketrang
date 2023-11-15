import Typography from '../typography/typography.component'

const Heading = Resolut.create<HTMLHeadingElement, Resolut.Component.HeadingProps>(
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
