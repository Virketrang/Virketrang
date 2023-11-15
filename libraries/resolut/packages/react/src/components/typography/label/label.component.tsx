import Typography from '../typography/typography.component'

const Label = Resolut.create<HTMLLabelElement, Resolut.Component.LabelProps>(
    (
        { children, for: htmlFor, required = false, /** @inject ref, **/ ...props } /** @remove start **/,
        ref /** @remove end **/
    ) => {
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
)

export default Label
