import Layout from '../layout/layout.component'
import SectionComponent from './section.component.types'

const Section: SectionComponent = memo(
    forwardRef((props, ref) => {
        return <Layout {...props} ref={ref} component="section" />
    })
)

export default Section
