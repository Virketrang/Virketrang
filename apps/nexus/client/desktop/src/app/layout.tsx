import '@/fonts/montserrat.css'
import '@/nexus/client/desktop/styles/globals.css'
import '@/nexus/client/desktop/styles/theme.css'
import '@/nexus/client/desktop/styles/settings.css'

export const metadata: Next.Metadata = {
    title: 'Nexus Compose',
    description: 'Nexus Compose'
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html className="overflow-hidden" lang="da">
            <body className="overflow-hidden select-none">{children}</body>
        </html>
    )
}
