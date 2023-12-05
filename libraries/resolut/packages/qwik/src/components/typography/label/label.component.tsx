import { component$ } from '@builder.io/qwik'
import Typography from '../typography/typography.component'

const Label = component$(({ for: htmlFor, required = false, ...props }: Resolut.Component.LabelProps) => {
    return (
        <Typography for={htmlFor} tag="label" element="label" {...props} {...Utils.setAttributes({ required })}>
            <Slot />
        </Typography>
    )
})

export default Label
