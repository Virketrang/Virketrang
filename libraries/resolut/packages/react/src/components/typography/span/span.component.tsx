import Typography from '../typography/typography.component'
import SpanComponent from './span.component.types'

const Span: SpanComponent = Resolut.create(
    ({ children, /** @inject ref, **/ ...props } /** @remove start **/, ref /** @remove end **/) => {
        return (
            <Typography tag="span" element="h1" ref={ref} {...props}>
                {children}
            </Typography>
        )
    }
)

export default Span
