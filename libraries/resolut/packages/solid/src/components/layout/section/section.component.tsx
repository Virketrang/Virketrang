import Layout from '../layout/layout.component'
import SectionComponent from './section.component.types'

const Section: SectionComponent = memo(
    forwardRef(({ children, ...props }, ref) => {
        return createElement(Layout, { ...props, ref, element: 'section' }, children)
    })
)

export default Section
