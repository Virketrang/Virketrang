import Typography from '../typography/typography.component'
import HeadingComponent from './heading.component.types'

const Heading: HeadingComponent = memo(
    forwardRef(({ children, ...props }, ref) => {
        return createElement(Typography, { tag: 'heading', element: 'h1', ref, ...props }, children)
    })
)

export default Heading
