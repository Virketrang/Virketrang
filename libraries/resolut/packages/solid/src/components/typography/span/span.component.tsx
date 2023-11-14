import Typography from '../typography/typography.component'
import SpanComponent from './span.component.types'

const Span: SpanComponent = memo(
    forwardRef(({ children, ...props }, ref) => {
        return createElement(Typography, { tag: 'span', element: 'h1', ref, ...props }, children)
    })
)

export default Span
