'use client'
import { NavLink } from './components'

const Navigation = () => {
    return (
        <nav className="bg-primary shadow w-full h-14 px-16">
            <ul className="flex h-full g-8 items-center">
                <li>
                    <NavLink href="/dashboard">Overblik</NavLink>
                </li>
                <li>
                    <NavLink href="/dashboard/orders">Ordrer</NavLink>
                </li>
                <li>
                    <NavLink href="/dashboard/products">Produkter</NavLink>
                </li>
                <li>
                    <NavLink href="/dashboard/employees">Medarbejdere</NavLink>
                </li>
                <li>
                    <NavLink href="/dashboard/website">Hjemmeside</NavLink>
                </li>
                <li>
                    <NavLink href="/dashboard/bookkeeping">Bogføring</NavLink>
                </li>
                <li>
                    <NavLink href="/dashboard/customers">Kundekartotek</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
