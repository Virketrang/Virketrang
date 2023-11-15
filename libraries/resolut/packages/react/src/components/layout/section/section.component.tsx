import Layout from '../layout/layout.component'

const Section = Resolut.create<HTMLElement, Resolut.Component.SectionProps>(
    ({ children, /** @inject ref, **/ ...props } /** @remove start **/, ref /** @remove end **/) => {
        return (
            <Layout {...props} ref={ref} element="section" tag="section">
                {children}
            </Layout>
        )
    }
)

export default Section
