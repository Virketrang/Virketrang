import Layout from '../layout/layout.component'

const Div: Resolut.Component<Resolut.Component.DivProps> = ({ children, ref, ...props }) => {
    return (
        <Layout {...props} ref={ref} element="div" tag="div">
            {children}
        </Layout>
    )
}

export default Div
