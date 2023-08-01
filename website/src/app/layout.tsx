export const metadata = {
    title: {
        default: 'Virketrang',
        template: 'Virketrang | %s'
    },
    description: 'Forsiden til virketrang.com'
}

const RootLayout: React.FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
    return <>{children}</>
}

export default RootLayout
