'use client'
import { usePathname } from 'next/navigation'

interface Props {
    href: string
    children: React.ReactNode
}

const NavLink: React.FC<Props> = ({ href, children }) => {
    const currentPath = usePathname()

    return (
        <Link
            className={`px-5 rounded-2xl py-[6px] grid place-items-center font-medium ${currentPath === href ? 'bg-secondary text-secondary' : ''}`}
            href={href}
        >
            {children}
        </Link>
    )
}

export default NavLink
