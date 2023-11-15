import Layout from '../layout/layout.component'

const Field = Resolut.create<HTMLDivElement, Resolut.Component.FieldProps>(
    ({ message, children,  ref,  ...props } ) => {
        return (
            <Layout ref={ref} tag="field" {...Utils.setAttributes({ message })} element="div" {...props}>
                {children}
            </Layout>
        )
    }
)

export default Field
