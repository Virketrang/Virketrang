interface Props {
    children: React.ReactNode
}

export const metadata: Next.Metadata = {
    title: 'Nexus Compose - Vælg virksomhed',
    description: 'Vælg den virksomhed du vil arbejde med'
}

const Page: React.FC<Props> = ({ children }) => {
    return (
        <main className="width-full flex-center flex-col h-[calc]" style={{ height: 'calc(100% - 5.5rem)' }}>
            <h1 className="text-5xl">Vælg virksomhed</h1>
            <p className="mt-4 text-xl">Hvilken virksomhed ønsker du at oprette forbindelse til?</p>
            {children}
        </main>
    )
}

export default Page
