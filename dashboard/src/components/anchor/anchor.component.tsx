import { forwardRef, memo } from 'react'
import AnchorComponent from './anchor.component.types'

function resolveHref(href: string) {
    const __prod__ = process.env['NODE_ENV'] === 'production'

    if (href === '/' && __prod__) return 'index.html'

    return __prod__ ? `${href.substring(1)}.html` : href
}

const Anchor: AnchorComponent = memo(
    forwardRef(({ href, ...props }, ref) => {
        return <a href={resolveHref(href)} {...props} ref={ref} />
    })
)

Anchor.displayName = 'Anchor'

export default Anchor
