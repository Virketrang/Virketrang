import { ComponentProps, FunctionComponent, memo } from 'react'

const Plus: FunctionComponent<ComponentProps<'svg'>> = memo(() => {
    return (
        <svg role="button" xmlns="http://www.w3.org/2000/svg" height="8" viewBox="0 -960 960 960" width="8">
            <path d="M464.615-220v-244.615H220v-30.77h244.615V-740h30.77v244.615H740v30.77H495.385V-220h-30.77Z" />
        </svg>
    )
})

Plus.displayName = 'Plus'

export default Plus
