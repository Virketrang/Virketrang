import Typography from '../typography/typography.component'
import ParagraphComponent from './paragraph.component.types'

const Paragraph: ParagraphComponent = memo(
    forwardRef(({ children, ...props }, ref) => {
        return createElement(Typography, { tag: 'paragraph', element: 'p', ref, ...props }, children)
    })
)

export default Paragraph
