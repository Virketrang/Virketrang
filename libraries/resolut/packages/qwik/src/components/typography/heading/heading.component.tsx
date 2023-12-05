import { component$ } from '@builder.io/qwik'
import Typography from '../typography/typography.component'

const Heading = component$(
    ({ heading, subheading, section, subsection, fluid, ...props }: Resolut.Component.HeadingProps) => {
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
                {...props}
            >
                <Slot />
            </Typography>
        )
    }
)

export default Heading
