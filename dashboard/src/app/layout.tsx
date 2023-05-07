import '@packages/styles/next.sass'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <base href="./" />
            </head>
            <body>
                <header>
                    <div>
                        <div>Liedecke & Noergaard</div>
                        <nav></nav>
                    </div>
                    <nav></nav>
                </header>
                {children}
            </body>
        </html>
    )
}
