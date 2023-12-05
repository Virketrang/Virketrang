const Nav = () => {
    return (
        <nav bg-white elevated w-full style="height: 3.5rem; padding-inline: 4rem;">
            <ul flex h-full gap-2 flex-items-center class="list">
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
