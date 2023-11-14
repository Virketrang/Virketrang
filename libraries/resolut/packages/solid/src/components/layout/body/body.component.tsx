import Layout from '../layout/layout.component'
import BodyComponent from './body.component.types'

const Body: BodyComponent = memo(
    forwardRef(({ children, ...props }, ref) => {
        return createElement(Layout, { ...props, ref, element: 'body', tag: 'body' }, children)
    })
)

export default Body
