import Layout from '../layout/layout.component'
import MainComponent from './main.component.types'

const Main: MainComponent = memo(
    forwardRef((props, ref) => {
        return <Layout {...props} ref={ref} component="main" />
    })
)

export default Main
