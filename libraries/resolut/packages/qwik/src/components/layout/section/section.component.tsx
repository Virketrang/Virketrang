import Layout from '../layout/layout.component'

const Section = Resolut.create<HTMLElement, Resolut.Component.SectionProps>(
    ({ children,  ref,  ...props } ) => {
        return (
            <Layout {...props} ref={ref} element="section" tag="section">
                {children}
            </Layout>
        )
    }
)

export default Section
