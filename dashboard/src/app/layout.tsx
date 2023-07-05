import { Header } from '@/composables'

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default Layout
