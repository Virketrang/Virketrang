import { component$ } from '@builder.io/qwik'
import Typography from '../typography/typography.component'

const Paragraph = component$(({ ...props }: Resolut.Component.ParagraphProps) => {
    return (
        <Typography tag="paragraph" element="p" {...props}>
            <Slot />
        </Typography>
    )
})

export default Paragraph
