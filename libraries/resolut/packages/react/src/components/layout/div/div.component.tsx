import Layout from '../layout/layout.component'

const Div = Resolut.create<HTMLDivElement, Resolut.Component.DivProps>(
    ({ children, /** @inject ref, **/ ...props } /** @remove start **/, ref /** @remove end **/) => {
        return (
            <Layout {...props} ref={ref} element="div" tag="div">
                {children}
            </Layout>
        )
    }
)

export default Div
