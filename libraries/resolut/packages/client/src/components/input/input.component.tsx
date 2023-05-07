import { forwardRef, memo } from 'react'

import InputComponent from './input.component.types'

const Input: InputComponent = memo(
    forwardRef(({ prefix, suffix, inputPrefix, inputSize, children, size, ...props }, ref) => {
        return (
            <input size={inputSize} prefix={inputPrefix} {...props} ref={ref}>
                {children}
            </input>
        )
    })
)

export default Input
