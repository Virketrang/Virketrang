import Typography from '../typography/typography.component'

const Link: Resolut.Component<Resolut.Component.LinkProps> = ({ underline = true, children, ref, ...props }) => {
    return (
        <Typography ref={ref} tag="link" element="a" {...Utils.setAttributes({ underline })} {...props}>
            {children}
        </Typography>
    )
}

export default Link
