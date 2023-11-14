import Typography from '../typography/typography.component'
import ParagraphComponent, { ParagraphProps } from './paragraph.component.types'

const Paragraph: ParagraphComponent = Resolut.create<HTMLParagraphElement, ParagraphProps>(
    ({ children, /** @inject ref, **/ ...props } /** @remove start **/, ref /** @remove end **/) => {
        return (
            <Typography tag="paragraph" element="p" ref={ref} {...props}>
                {children}
            </Typography>
        )
    }
)

export default Paragraph
