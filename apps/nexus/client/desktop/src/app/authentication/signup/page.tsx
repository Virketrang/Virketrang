import { Logo } from '@/nexus/client/desktop/components/index'
import Link from 'next/link'

export const metadata: Next.Metadata = {
    title: 'Nexus Compose - Opret bruger',
    description: 'Opret en bruger i Nexus Compose'
}

const Page = () => {
    return (
        <main className="flex-center flex-col w-full min-h-screen">
            <div className="flex flex-col items-center gap-12">
                <Logo />
                <h3>Velkommen</h3>
            </div>
            <div className="flex flex-col g-8 w-[32rem] mt-16 mb-8">
                <div className="flex flex-col g-4">
                    <h4 className="text-center uppercase">Oplysning</h4>
                    <p className="text-center text-balance">
                        Nexus er stadig under udvikling. Du skal derfor bruge en kode for at oprette en bruger.
                    </p>
                </div>
                <Link href="/authentication/signup/credentials" className="w-full h-12 shadow text-primary bg-primary">
                    Start
                </Link>
                <Link href="/" className="underline">
                    Tilbage
                </Link>
            </div>
        </main>
    )
}

export default Page
