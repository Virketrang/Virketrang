import { LabelComponent, LabelProps } from './label.component.types'
import Typography from '../typography/typography.component'

const Label: LabelComponent = Resolut.create<HTMLLabelElement, LabelProps>(
    ({ children, required = false, /** @inject ref, **/ ...props } /** @remove start **/, ref /** @remove end **/) => {
        return (
            <Typography ref={ref} tag="label" element="label" {...props} {...Utils.setAttributes({ required })}>
                {children}
            </Typography>
        )
    }
)

export default Label
