import { Logo, ProfileCard } from '../../components'

export const metadata: Next.Metadata = {
    title: 'Nexus Compose - Vælg virksomhed',
    description: 'Vælg den virksomhed du vil arbejde med'
}

interface Props {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <header className="flex justify-between px-12 pt-12">
                <div className="flex item-center gap-4">
                    <Logo size={32} />
                    <h4>Nexus</h4>
                </div>
                <ProfileCard />
            </header>
            {children}
        </>
    )
}

export default Layout
