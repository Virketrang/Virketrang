import Layout from '../layout/layout.component'
import { FieldComponent, FieldProps } from './field.component.types'

const Field: FieldComponent = Resolut.create<HTMLDivElement, FieldProps>(
    ({ message, children, /** @inject ref, **/ ...props } /** @remove start **/, ref /** @remove end **/) => {
        return (
            <Layout ref={ref} tag="field" {...Utils.setAttributes({ message })} element="div" {...props}>
                {children}
            </Layout>
        )
    }
)

export default Field
