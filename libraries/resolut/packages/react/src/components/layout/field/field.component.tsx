import Layout from '../layout/layout.component'

const Field = Resolut.create<HTMLDivElement, Resolut.Component.FieldProps>(
    ({ message, children, /** @inject ref, **/ ...props } /** @remove start **/, ref /** @remove end **/) => {
        return (
            <Layout ref={ref} tag="field" {...Utils.setAttributes({ message })} element="div" {...props}>
                {children}
            </Layout>
        )
    }
)

export default Field
