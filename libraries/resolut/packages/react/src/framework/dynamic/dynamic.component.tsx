import DynamicComponent from './dynamic.component.types'

const Dynamic: DynamicComponent = memo(
    forwardRef(({ component, children, ...props }, ref) => {
        return createElement(component, { ...props, ref }, children)
    })
)

export default Dynamic
