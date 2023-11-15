import Typography from '../typography/typography.component'

const Paragraph: Resolut.Component<Resolut.Component.ParagraphProps> = ({ children, ref, ...props }) => {
    return (
        <Typography tag="paragraph" element="p" ref={ref} {...props}>
            {children}
        </Typography>
    )
}

export default Paragraph
