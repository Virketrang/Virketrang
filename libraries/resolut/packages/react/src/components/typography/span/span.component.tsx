import Typography from '../typography/typography.component'

const Span = Resolut.create<HTMLSpanElement, Resolut.Component.SpanProps>(
    ({ children, /** @inject ref, **/ ...props } /** @remove start **/, ref /** @remove end **/) => {
        return (
            <Typography tag="span" element="h1" ref={ref} {...props}>
                {children}
            </Typography>
        )
    }
)

export default Span
