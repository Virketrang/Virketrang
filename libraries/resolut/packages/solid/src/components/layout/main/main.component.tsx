import Layout from '../layout/layout.component'
import MainComponent from './main.component.types'

const Main: MainComponent = memo(
    forwardRef(({ children, ...props }, ref) => {
        return createElement(Layout, { ...props, ref, element: 'main', tag: 'main' }, children)
    })
)

export default Main
