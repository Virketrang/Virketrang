import Layout from '../layout/layout.component'
import DivComponent from './div.component.types'

const Div: DivComponent = memo(
    forwardRef((props, ref) => {
        return <Layout {...props} ref={ref} component="div" />
    })
)

export default Div
