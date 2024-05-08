import Header from '@/nexus/client/desktop/features/header'
import { Protected } from '../../components'

interface Props {
    children: React.ReactNode
}

export const metadata: Next.Metadata = {
    title: 'Nexus Compose - Dashboard',
    description: 'Nexus Compose - Dashboard'
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <Protected>
            <Header />
            {children}
        </Protected>
    )
}

export default Layout
