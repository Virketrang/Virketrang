import { Logo } from '../../components'

interface Props {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
    return <main className="w-full min-h-screen flex-center flex-col px-16">{children}</main>
}

export default Layout
