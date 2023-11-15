import Layout from '../layout/layout.component'

const Main: Resolut.Component<Resolut.Component.MainProps> = ({ children, ref, ...props }) => {
    return (
        <Layout {...props} ref={ref} element="main" tag="main">
            {children}
        </Layout>
    )
}

export default Main
