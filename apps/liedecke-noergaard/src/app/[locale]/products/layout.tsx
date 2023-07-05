import { ReactNode } from 'react'

type LayoutProps = { children: ReactNode }

export default function ProductLayout({ children }: LayoutProps) {
    return <>{children}</>
}
