import { ComponentProps, FunctionComponent, memo } from 'react'

const Minus: FunctionComponent<ComponentProps<'svg'>> = memo(() => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="8" viewBox="0 -960 960 960" width="8">
            <path d="M220-464.615v-30.77h520v30.77H220Z" />
        </svg>
    )
})

Minus.displayName = 'Minus'

export default Minus
