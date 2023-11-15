import Typography from '../typography/typography.component'

const Label: Resolut.Component<Resolut.Component.LabelProps> = ({
    children,
    for: htmlFor,
    required = false,
    ref,
    ...props
}) => {
    return (
        <Typography
            ref={ref}
            for={htmlFor}
            tag="label"
            element="label"
            {...props}
            {...Utils.setAttributes({ required })}
        >
            {children}
        </Typography>
    )
}

export default Label
