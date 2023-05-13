import { FunctionComponent, ReactNode } from 'react'

export const metadata = {
    title: {
        default: 'Virketrang',
        template: 'Virketrang | %s'
    },
    description: 'Forsiden til virketrang.com'
}

const RootLayout: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
    return <>{children}</>
}

export default RootLayout
