import Layout from '../layout/layout.component'

const Body = Resolut.create<HTMLBodyElement, Resolut.Component.BodyProps>(
    ({ children, /** @inject ref, **/ ...props } /** @remove start **/, ref /** @remove end **/) => {
        return (
            <Layout {...props} ref={ref} element="body" tag="body">
                {children}
            </Layout>
        )
    }
)

export default Body
