import { Logo } from '../components'
import Link from 'next/link'

export const metadata: Next.Metadata = {
    title: 'Nexus Compose - Velkommen',
    description: 'Nexus Compose - Velkommen'
}

export default function Home() {
    return (
        <main className="flex-center flex-col gap-16 w-full min-h-screen h-full">
            <Logo />
            <div className="flex flex-col gap:2rem padding-inline:4rem">
                <h4 className="font:light text-center">Skab overblik for dig og dine medarbejdere</h4>
                <h1 className="font:3rem max-w:1150px text:balance text-center">
                    En samlet applikation til din virksomhed
                </h1>
                <h4 className="font:light text-center">Administrer hjemmeside, ordrer, løn og bogføring i en app</h4>
            </div>
            <div className="h:8rem flex-center flex:row gap:4rem">
                <Link
                    className="bg-primary text-primary shadow h-12 w-96 rounded-3xl flex-center"
                    href="/authentication/signin"
                >
                    Login
                </Link>
                <Link
                    className="bg-secondary text-secondary shadow h-12 w-96 rounded-3xl flex-center"
                    href="/authentication/signup"
                >
                    Opret
                </Link>
            </div>
        </main>
    )
}
