import { SnackbarProvider } from '@/common'
import { Snackbar } from '@/components'
import { Header } from '@/composables'

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
