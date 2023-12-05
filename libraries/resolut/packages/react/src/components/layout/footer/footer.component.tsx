import Layout from '../layout/layout.component'

const Footer = Resolut.create<HTMLElement, Resolut.Component.FooterProps>(({ children, ...props }, ref) => {
    return (
        <Layout tag="footer" element="footer" ref={ref} {...props}>
            {children}
        </Layout>
    )
})

export default Footer
