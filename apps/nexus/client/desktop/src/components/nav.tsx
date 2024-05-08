const Nav = () => {
    return (
        <nav className="position-relative z-10 bg-primary shadow w-full h-14 px-16">
            <ul className="flex h-full gap-8 items-center">
                <li>
                    <a href="/dashboard">Oversigt</a>
                </li>
                <li>
                    <a href="/dashboard/orders">Ordrer</a>
                </li>
                <li>
                    <a href="/dashboard/products">Produkter</a>
                </li>
                <li>
                    <a href="/dashboard/employees">Medarbejdere</a>
                </li>
                <li>
                    <a href="/dashboard/website">Hjemmeside</a>
                </li>
                <li>
                    <a href="/dashboard/bookkeeping">Bogføring</a>
                </li>
                <li>
                    <a href="/dashboard/customers">Kundekartotek</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
