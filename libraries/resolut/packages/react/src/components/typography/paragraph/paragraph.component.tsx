import Typography from '../typography/typography.component'

const Paragraph = Resolut.create<HTMLParagraphElement, Resolut.Component.ParagraphProps>(
    ({ children, /** @inject ref, **/ ...props } /** @remove start **/, ref /** @remove end **/) => {
        return (
            <Typography tag="paragraph" element="p" ref={ref} {...props}>
                {children}
            </Typography>
        )
    }
)

export default Paragraph
