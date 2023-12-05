import { component$ } from '@builder.io/qwik'
import Typography from '../typography/typography.component'

const Link = component$(({ underline = true, ...props }: Resolut.Component.LinkProps) => {
    return (
        <Typography tag="link" element="a" {...Utils.setAttributes({ underline })} {...props}>
            <Slot />
        </Typography>
    )
})

export default Link
