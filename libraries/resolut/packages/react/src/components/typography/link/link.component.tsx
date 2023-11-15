import Typography from '../typography/typography.component'

const Link = Resolut.create<HTMLAnchorElement, Resolut.Component.LinkProps>(
    ({ underline = true, children, /** @inject ref, **/ ...props } /** @remove start **/, ref /** @remove end **/) => {
        return (
            <Typography ref={ref} tag="link" element="a" {...Utils.setAttributes({ underline })} {...props}>
                {children}
            </Typography>
        )
    }
)

export default Link
