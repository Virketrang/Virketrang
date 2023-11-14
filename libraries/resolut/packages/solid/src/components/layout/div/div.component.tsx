import Layout from '../layout/layout.component'
import DivComponent from './div.component.types'

const Div: DivComponent = memo(
    forwardRef(({ children, ...props }, ref) => {
        return createElement(Layout, { ...props, ref, element: 'div', tag: 'div' }, children)
    })
)

export default Div
