import { SnackbarProvider } from '@/nexus/common'
import { Snackbar } from '@/nexus/components'
import { Header } from '@/nexus/composables'

function Layout() {
    return (
        <>
            <SnackbarProvider>
                <Header />
                <Outlet />

                <Snackbar placement="bottom-left" />
            </SnackbarProvider>
        </>
    )
}

export default Layout
