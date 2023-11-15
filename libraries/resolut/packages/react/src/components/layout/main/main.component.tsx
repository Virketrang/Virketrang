import Layout from '../layout/layout.component'

const Main = Resolut.create<HTMLElement, Resolut.Component.MainProps>(
    ({ children, /** @inject ref, **/ ...props } /** @remove start **/, ref /** @remove end **/) => {
        return (
            <Layout {...props} ref={ref} element="main" tag="main">
                {children}
            </Layout>
        )
    }
)

export default Main
