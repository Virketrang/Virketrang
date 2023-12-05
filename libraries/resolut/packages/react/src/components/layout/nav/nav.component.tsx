import Layout from '../layout/layout.component'

const Nav = Resolut.create<HTMLElement, Resolut.Component.NavProps>(({ children, ...props }, ref) => {
    return (
        <Layout tag="nav" element="nav" ref={ref} {...props}>
            {children}
        </Layout>
    )
})

export default Nav
