import Layout from '../layout/layout.component'

const Header = Resolut.create<HTMLElement, Resolut.Component.HeaderProps>(({ children, ...props }, ref) => {
    return (
        <Layout tag="header" element="header" ref={ref} {...props}>
            {children}
        </Layout>
    )
})

export default Header
