import Typography from '../typography/typography.component'
import { LinkComponent, LinkProps } from './link.component.types'

const Link: LinkComponent = Resolut.create<HTMLAnchorElement, LinkProps>(
    ({ underline = true, children, /** @inject ref, **/ ...props } /** @remove start **/, ref /** @remove end **/) => {
        return (
            <Typography ref={ref} tag="link" element="a" {...Utils.setAttributes({ underline })} {...props}>
                {children}
            </Typography>
        )
    }
)

export default Link
