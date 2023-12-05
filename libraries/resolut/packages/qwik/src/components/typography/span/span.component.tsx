import { component$ } from '@builder.io/qwik'
import Typography from '../typography/typography.component'

const Span = component$(({ ...props }: Resolut.Component.SpanProps) => {
    return (
        <Typography tag="span" element="h1" {...props}>
            <Slot />
        </Typography>
    )
})

export default Span
