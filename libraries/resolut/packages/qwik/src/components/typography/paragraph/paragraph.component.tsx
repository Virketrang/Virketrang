import Typography from '../typography/typography.component'

const Paragraph = Resolut.create<HTMLParagraphElement, Resolut.Component.ParagraphProps>(
    ({ children,  ref,  ...props } ) => {
        return (
            <Typography tag="paragraph" element="p" ref={ref} {...props}>
                {children}
            </Typography>
        )
    }
)

export default Paragraph
