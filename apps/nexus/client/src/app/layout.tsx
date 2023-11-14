import { SnackbarProvider } from '@/nexus/client/common'
import { Snackbar } from '@/nexus/client/components'

import Header from '@/nexus/client/composables/ui/header/header.component'

function Layout() {
    return (
        <>
            <SnackbarProvider>
                <Header />

                <Snackbar placement="bottom-left" />
            </SnackbarProvider>
        </>
    )
}

export default Layout
